import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.TIKTOK;

export function* getListTiktok() {
  try {
    let _res = yield call(SERVICES.getTiktok);
    const { data } = _res;

    yield put({ type: Redux.GET_TIKTOK_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_TIKTOK_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_TIKTOK_LIST, getListTiktok)]);
}
