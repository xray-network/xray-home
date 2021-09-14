import { all, takeEvery, put, call, select } from "redux-saga/effects"
import store from "store"
import actions from "./actions"
import { getNetworkInfo } from "@/services/graphql"
import { getPrices } from "@/services/coingecko"
import { getPools, getHistory } from "@/services/distr"

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

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "prices",
      value: prices?.data || {},
    },
  })
}

export function* FETCH_POOLS() {
  const pools = yield call(getPools)

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "pools",
      value: pools?.data || {},
    },
  })
}

export function* FETCH_HISTORY() {
  const history = yield call(getHistory)

  yield put({
    type: "settings/CHANGE_SETTING",
    payload: {
      setting: "history",
      value: history?.data || {},
    },
  })
}

export function* SETUP() {
  const theme = yield select((state) => state.settings.theme)
  yield call(CHANGE_THEME, { theme })
  yield call(FETCH_NETWORK_STATE)
  yield call(FETCH_HISTORY)
  yield call(FETCH_PRICES)
  yield call(FETCH_POOLS)
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHANGE_SETTING, CHANGE_SETTING),
    takeEvery(actions.SWITCH_MEGA_MENU, SWITCH_MEGA_MENU),
    takeEvery(actions.CHANGE_THEME, CHANGE_THEME),
    takeEvery(actions.FETCH_NETWORK_STATE, FETCH_NETWORK_STATE),
    takeEvery(actions.FETCH_HISTORY, FETCH_HISTORY),
    takeEvery(actions.FETCH_PRICES, FETCH_PRICES),
    takeEvery(actions.FETCH_POOLS, FETCH_POOLS),
    SETUP(),
  ])
}
