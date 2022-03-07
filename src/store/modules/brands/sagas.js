import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.BRANDS;

export function* getBrands() {
  try {
    let res = yield call(SERVICES.getBrands);

    if (!res?.data) {
      throw res.error.message;
    }
    yield put({ type: Redux.GET_BRANDS_SUCCESS, value: res.data });
  } catch (error) {
    yield put({
      type: Redux.GET_BRANDS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getFeaturedBrands() {
  try {
    let res = yield call(SERVICES.getFeaturedBrands);

    if (!res?.data) {
      throw res.error.message;
    }
    yield put({
      type: Redux.GET_FEATURED_BRANDS_SUCCESS,
      value: res.data.brand_list,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_BRANDS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getBrandProducts({ id }) {
  try {
    let res = yield call(SERVICES.getBrandProducts, id);

    if (!res?.data) {
      throw res;
    }

    yield put({
      type: Redux.GET_BRAND_PRODUCTS_SUCCESS,
      value: res.data.products,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_BRANDS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getSearchBrandList({ keyword }) {
  yield put({ type: Redux.SET_SEARCH_BRANDS_LOADING, value: true });
  try {
    let res = yield call(SERVICES.getSearchBrandList, keyword);

    if (!res?.data) {
      throw res;
    }

    yield put({
      type: Redux.GET_SEARCH_BRANDS_LIST,
      value: res.data,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_BRANDS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(Saga.GET_BRANDS, getBrands),
    takeEvery(Saga.GET_FEATURED_BRANDS, getFeaturedBrands),
    takeEvery(Saga.GET_BRAND_PRODUCTS, getBrandProducts),
    takeEvery(Saga.GET_SEARCH_BRANDS_LIST, getSearchBrandList),
  ]);
}
