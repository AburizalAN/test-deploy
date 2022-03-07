import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.PRODUCT_CATEGORIES;

export function* getListProductCategories() {
  try {
    yield put({ type: Redux.GET_PRODUCT_CATEGORIES_LOADING });
    let _res = yield call(SERVICES.getCategories);
    const { data } = _res;

    yield put({ type: Redux.GET_PRODUCT_CATEGORIES_SUCCESS, value: { data } });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_CATEGORIES_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(Saga.GET_PRODUCT_CATEGORIES_LIST, getListProductCategories),
  ]);
}
