import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.YOUTUBE;

export function* getListYoutube() {
  try {
    let _res = yield call(SERVICES.getYoutube);
    const { data } = _res;

    yield put({ type: Redux.GET_YOUTUBE_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_YOUTUBE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_YOUTUBE_LIST, getListYoutube)]);
}
