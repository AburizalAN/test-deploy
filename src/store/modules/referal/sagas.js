import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.REFERAL;

export function* getReferalCode() {
  try {
    let _res = yield call(SERVICES.getReferalCode);
    const { data } = _res;
    console.log('data', data);
    yield put({ type: Redux.GET_REFERAL_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_REFERAL_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_REFERAL_CODE, getReferalCode)]);
}
