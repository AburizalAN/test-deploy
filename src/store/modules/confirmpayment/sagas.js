import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.CONFIRM_PAYMENT;

export function* confirmPayment({ data }) {
  try {
    yield put({ type: Redux.CONFIRM_PAYMENT_LOADING });

    const res = yield call(SERVICES.confirmPayment, data);

    if (!res?.data) {
      throw res.error.message;
    }

    if (res.data.status === 'error') {
      throw res.data.message;
    }

    yield put({
      type: Redux.CONFIRM_PAYMENT_SUCCESS,
      success: 'Konfirmasi Sukses',
    });
  } catch (error) {
    yield put({
      type: Redux.CONFIRM_PAYMENT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* signupSagas() {
  yield all([takeEvery(Saga.SET_CONFIRM_PAYMENT, confirmPayment)]);
}
