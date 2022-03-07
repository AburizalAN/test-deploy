import { Functions } from '@mui/icons-material';
import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.ADDTOCART;

export function* postdetail(body) {
  try {
    let res = yield call(SERVICES.postAddToCart, body);

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.GET_ADDTOCART_SUCCESS, value: res.data });
    if (body.callback) {
      body.callback();
    }
  } catch (error) {
    console.log('errors', error);
    if (error == "The consumer isn't authorized to access %resources.") {
      window.location.replace('/login');
    }
    yield put({
      type: Redux.GET_ADDTOCART_FAILURE,
      error: typeof error != 'string' ? error : error,
    });
  }
}

export function* reset() {
  try {
    yield put({ type: Redux.RESET });
  } catch (error) {
    console.log('errors', error);
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_ADDTOCART_LIST, postdetail)]);
  yield all([takeEvery(Saga.GET_ADDTOCART_RESET, reset)]);
}
