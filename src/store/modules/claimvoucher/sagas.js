import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.CLAIM_VOUCHER;

export function* claimVoucher({ data }) {
  try {
    yield put({ type: Redux.CLAIM_VOUCHER_LOADING });

    const res = yield call(SERVICES.claimVoucher, data);

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({
      type: Redux.CLAIM_VOUCHER_SUCCESS,
      success: res.data,
    });
  } catch (error) {
    yield put({
      type: Redux.CLAIM_VOUCHER_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* signupSagas() {
  yield all([takeEvery(Saga.SET_CLAIM_VOUCHER, claimVoucher)]);
}
