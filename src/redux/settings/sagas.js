import { all, takeEvery, put } from 'redux-saga/effects'
import store from 'store'
// import * as ExplorerHelper from '@/services/cardano-helper'
import actions from './actions'

export function* CHANGE_SETTING({ payload: { setting, value } }) {
  yield store.set(`app.settings.${setting}`, value)
  yield put({
    type: 'settings/SET_STATE',
    payload: {
      [setting]: value,
    },
  })
}

export function* SETUP() {
  // const delegationRewardsState = yield call(ExplorerHelper.GetDelegationRewardsState)
  // yield put({
  //   type: 'settings/SET_STATE',
  //   payload: {
  //     delegationRewardsState,
  //   },
  // })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHANGE_SETTING, CHANGE_SETTING),
    SETUP(),
  ])
}
