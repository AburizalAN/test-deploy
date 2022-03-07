import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.BANNERSHOP;

export function* getBannerShopping({ reduxConstant, id }) {
  try {
    let res = yield call(SERVICES.getBannerShopping, id);
    if (!res?.data) {
      throw res.error.message;
    }
    const { data } = res;
    yield put({ type: reduxConstant, payload: data });
  } catch (error) {
    yield put({
      type: Redux.GET_CHECKOUT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_BANNER_SHOPPING, getBannerShopping)]);
}
