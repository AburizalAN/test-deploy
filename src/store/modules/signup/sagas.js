import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.SIGNUP;

export function* registerCustomer({ data }) {
  try {
    yield put({ type: Redux.REGISTER_CUSTOMER_LOADING });

    const res = yield call(SERVICES.signup, data);

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({
      type: Redux.REGISTER_CUSTOMER_SUCCESS,
      success:
        'Registrasi akun anda berhasil, silahkan cek email anda untuk melakukan verifikasi',
    });
  } catch (error) {
    yield put({
      type: Redux.REGISTER_CUSTOMER_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* signupSagas() {
  yield all([takeEvery(Saga.REGISTER_CUSTOMER, registerCustomer)]);
}
