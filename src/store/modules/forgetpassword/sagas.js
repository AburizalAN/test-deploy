import {
  all,
  call,
  delay,
  fork,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import TYPES from './constants';
import ALERT_TYPES from '../alert/constants';
import SERVICES from './services';
import Cookie from 'js-cookie';

const { Redux, Saga } = TYPES.FORGET_PASSWORD;

export function* sendEmail({ email }) {
  try {
    yield put({ type: Redux.SEND_EMAIL_LOADING });

    const res = yield call(SERVICES.sendEmail, email);

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.SEND_EMAIL_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: {
        message: 'Email berhasil dikirim, silakan cek email',
        type: 'success',
      },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.SEND_EMAIL_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
    yield delay(5000);
    yield put({
      type: Redux.RESET,
    });
  }
}

export function* resetPassword({ data }) {
  try {
    yield put({ type: Redux.RESET_PASSWORD_LOADING });

    const res = yield call(SERVICES.resetPassword, data);

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.RESET_PASSWORD_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: {
        message:
          'Selamat!, Password kamu berhasil direset. Silakan login kembali',
        type: 'success',
      },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.RESET_PASSWORD_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
    yield delay(5000);
    yield put({
      type: Redux.RESET,
    });
  }
}

export default function* forgetPasswordSagas() {
  yield all([takeLatest(Saga.SEND_EMAIL, sendEmail)]);
  yield all([takeLatest(Saga.RESET_PASSWORD, resetPassword)]);
}
