import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.CLAIM_PRODUCT;

export function* claimProduct({ data }) {
  try {
    yield put({ type: Redux.CLAIM_PRODUCT_LOADING });

    const res = yield call(SERVICES.claimProduct, data);

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({
      type: Redux.CLAIM_PRODUCT_SUCCESS,
      success: res.data,
    });
  } catch (error) {
    yield put({
      type: Redux.CLAIM_PRODUCT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* signupSagas() {
  yield all([takeEvery(Saga.SET_CLAIM_PRODUCT, claimProduct)]);
}
