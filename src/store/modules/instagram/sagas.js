import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.INSTAGRAM;

export function* getListInstagram() {
  try {
    let _res = yield call(SERVICES.getInstagram);
    const { data } = _res;

    yield put({ type: Redux.GET_INSTAGRAM_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_INSTAGRAM_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_INSTAGRAM_LIST, getListInstagram)]);
}
