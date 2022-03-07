import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.INFO;

export function* infoDetail() {
  try {
    let res = yield call(SERVICES.getInfo);

    // if (!res?.data) {
    //   throw res.error.message;
    // }

    yield put({ type: Redux.GET_INFO_SUCCESS, value: res.data });
  } catch (error) {
    yield put({
      type: Redux.GET_INFO_FAILURE,
      error: typeof error != 'string' ? error : error,
    });
  }
}

export function* postFirebase(body) {
  try {
    let res = yield call(SERVICES.postTokenFirebaseDatabase, body);

    // if (!res?.data) {
    //   throw res.error.message;
    // }

    yield put({ type: Redux.POST_FIREBASE_SUCCESS, value: res.data });
  } catch (error) {
    yield put({
      type: Redux.POST_FIREBASE_FAILURE,
      error: typeof error != 'string' ? error : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_INFO_LIST, infoDetail)]);
  yield all([takeEvery(Saga.POST_FIREBASE_LIST, postFirebase)]);
}
