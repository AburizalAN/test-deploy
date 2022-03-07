import {
  all,
  takeEvery,
  put,
  fork,
  select,
  call,
  take,
} from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.PRODUCT_BY_SLUG;

export function* getListProductSlug(params) {
  try {
    yield put({
      type: Redux.GET_PRODUCT_BY_SLUG_LOADING,
    });
    let _res = yield call(SERVICES.getProduct, params);
    const { data } = _res;

    yield put({
      type: Redux.GET_PRODUCT_BY_SLUG_SUCCESS,
      value: { data },
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_BY_SLUG_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_PRODUCT_BY_SLUG_LIST, getListProductSlug)]);
}
