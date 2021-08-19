import { all, takeEvery, put, call, select } from "redux-saga/effects"
import store from "store"
import actions from "./actions"
import Cardano from "../../services/cardano"

export function* CHANGE_SETTING({ payload: { setting, value } }) {
  yield store.set(`app.settings.${setting}`, value)
  yield put({
    type: "settings/SET_STATE",
    payload: {
      [setting]: value,
    },
  })
}

export function* SWITCH_MEGA_MENU() {
  const megaMenu = yield select((state) => state.settings.megaMenu)
  if (global.document) {
    global.document
      .getElementsByTagName("body")[0]
      .classList.toggle("overflow-hidden")
  }
  yield put({
    type: "settings/SET_STATE",
    payload: {
      megaMenu: !megaMenu,
    },
  })
}

export function* CHANGE_THEME({ theme }) {
  if (global.document) {
    global.document
      .querySelector("html")
      .setAttribute("data-disable-transitions", "true")
    global.document.querySelector("html").setAttribute("data-theme", theme)
    setTimeout(() => {
      global.document
        .querySelector("html")
        .removeAttribute("data-disable-transitions")
    }, 500)
  }
  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "theme",
      value: theme,
    },
  })
}

export function* FETCH_NETWORK_STATE() {
  const networkInfo = yield call(Cardano.explorer.getNetworkInfo)

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "networkBlock",
      value: networkInfo?.data?.data?.cardano?.tip?.number || 0,
    },
  })

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "networkSlot",
      value: networkInfo?.data?.data?.cardano?.tip?.slotNo || 0,
    },
  })

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "networkEpoch",
      value: networkInfo?.data?.data?.cardano?.currentEpoch?.number || 0,
    },
  })

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "networkEpochStartedAt",
      value:
        networkInfo?.data?.data?.cardano?.currentEpoch?.startedAt || undefined,
    },
  })
}

export function* FETCH_RATE() {
  // const rateInfo = yield fetch('http://localhost:8080/rewards/delegation/rate/')
  const rateInfo = yield fetch(`https://api-mainnet-helper.rraayy.com/rewards/delegation/rate/`)
    .then((res) => res.json())

  if (rateInfo?.rate) {
    yield put({
      type: "settings/CHANGE_SETTING",
      payload: {
        setting: "rate",
        value: rateInfo.rate || 0,
      },
    })
  }
}

export function* SETUP() {
  const theme = yield select((state) => state.settings.theme)
  yield call(CHANGE_THEME, { theme })
  const cardano = yield Cardano.init()
  yield put({
    type: "settings/SET_STATE",
    payload: {
      Cardano: cardano,
    },
  })
  yield call(FETCH_NETWORK_STATE)
  yield call(FETCH_RATE)
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHANGE_SETTING, CHANGE_SETTING),
    takeEvery(actions.SWITCH_MEGA_MENU, SWITCH_MEGA_MENU),
    takeEvery(actions.CHANGE_THEME, CHANGE_THEME),
    takeEvery(actions.FETCH_NETWORK_STATE, FETCH_NETWORK_STATE),
    takeEvery(actions.FETCH_RATE, FETCH_RATE),
    SETUP(),
  ])
}
