import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';
import Cookie from 'js-cookie';

const { Redux, Saga } = TYPES.LOGIN;

function* authorizeSuccess(token) {
  yield put({ type: Redux.AUTHORIZE_SUCCESS });

  const { pathname } = window.location;

  Cookie.set('AMToken', token);

  if (pathname !== '/login') {
    window.location.replace(pathname);
    return;
  }

  window.location.reload();
}

export function* authorize({ username, password }) {
  try {
    yield put({ type: Redux.AUTHORIZE_LOADING });

    const res = yield call(SERVICES.login, username, password);

    if (!res?.data) {
      throw res.error.message;
    }

    yield call(authorizeSuccess, res.data);
  } catch (error) {
    yield put({
      type: Redux.AUTHORIZE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* loginSagas() {
  yield all([takeEvery(Saga.AUTHORIZE, authorize)]);
}
