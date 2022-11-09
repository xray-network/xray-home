import { all, takeEvery, put, call, select } from "redux-saga/effects"
import store from "store"
import actions from "./actions"
import { isSSR} from "@/utils"
import { getNetworkInfo } from "@/services/graphql"
import { getPrices } from "@/services/coingecko"
import { getPricesXRAY, getStage1ISPO, getStage1Stake } from "@/services/raygraph"

export function* CHANGE_SETTING({ payload: { setting, value } }) {
  yield store.set(`ray.wallet.settings.${setting}`, value)
  yield put({
    type: "settings/SET_STATE",
    payload: {
      [setting]: value,
    },
  })
}

export function* SWITCH_MEGA_MENU() {
  const megaMenu = yield select((state) => state.settings.megaMenu)
  if (global?.document) {
    global.document.getElementsByTagName("body")[0].classList.toggle("overflow-hidden")
  }
  yield put({
    type: "settings/SET_STATE",
    payload: {
      megaMenu: !megaMenu,
    },
  })
}

export function* FETCH_NETWORK_STATE() {
  const networkState = yield call(getNetworkInfo)

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "networkState",
      value: networkState?.data?.data?.cardano || {},
    },
  })
}

export function* FETCH_PRICES() {
  const prices = yield call(getPrices)
  const pricesXRAY = yield call(getPricesXRAY)

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "prices",
      value: prices?.data || {},
    },
  })
  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "pricesXRAY",
      value: pricesXRAY?.data || {},
    },
  })
}

export function* FETCH_STAGE1_HISTORY() {
  const ispoHistory = yield call(getStage1ISPO)
  const stakeHistory = yield call(getStage1Stake)

  if (ispoHistory?.data) {
    yield put({
      type: "settings/SET_STATE",
      payload: {
        ispoHistory: ispoHistory?.data || {},
      },
    })
  }

  if (stakeHistory?.data) {
    yield put({
      type: "settings/SET_STATE",
      payload: {
        stakeHistory: stakeHistory?.data || {},
      },
    })
  }
}

export function* SETUP() {
  if (!isSSR) {
    yield all([
      call(FETCH_NETWORK_STATE),
      call(FETCH_PRICES),
      call(FETCH_STAGE1_HISTORY)
    ])
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHANGE_SETTING, CHANGE_SETTING),
    takeEvery(actions.SWITCH_MEGA_MENU, SWITCH_MEGA_MENU),
    takeEvery(actions.FETCH_NETWORK_STATE, FETCH_NETWORK_STATE),
    takeEvery(actions.FETCH_PRICES, FETCH_PRICES),
    takeEvery(actions.FETCH_STAGE1_HISTORY, FETCH_STAGE1_HISTORY),
    SETUP(),
  ])
}
