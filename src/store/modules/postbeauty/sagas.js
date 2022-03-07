import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.POSTBEAUTY;

export function* getListPostBeauty(params) {
  try {
    let _res = yield call(SERVICES.getBeautyPostAPI);
    const { data } = _res;

    yield put({ type: Redux.GET_BEAUTY_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_BEAUTY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_BEAUTY_LIST, getListPostBeauty)]);
}
