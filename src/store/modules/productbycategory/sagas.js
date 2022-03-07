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

const { Redux, Saga } = TYPES.PRODUCT_BY_CATEGORY;

export function* getListProductCategories(params) {
  try {
    yield put({ type: Redux.GET_PRODUCT_BY_CATEGORY_LOADING });
    let _res = yield call(SERVICES.getCategories, params.idCategory);

    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_SUCCESS,
      value: { ..._res },
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getListProductSlider() {
  try {
    let _res = yield call(SERVICES.getProductSlider);
    const { data } = _res;

    yield put({
      type: Redux.GET_LIST_PRODUCT_SLIDER,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getListProductPremiumSlider() {
  try {
    let _res = yield call(SERVICES.getProductPremiumSlider);
    const { response } = _res;

    yield put({
      type: Redux.GET_LIST_PRODUCT_PREMIUM_SLIDER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getListProductSubCategories(params) {
  try {
    yield put({ type: Redux.RESET });
    yield put({ type: Redux.GET_PRODUCT_BY_CATEGORY_LOADING });
    let _res = yield call(SERVICES.getCategories, params.idCategory);

    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_SUCCESS,
      value: { ..._res },
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getMoreListProductCategories(params, params2) {
  try {
    yield put({ type: Redux.GET_MORE_PRODUCT_BY_CATEGORY_LOADING });
    let _res = yield call(SERVICES.getMoreProduct, params, params2);

    yield put({
      type: Redux.GET_MORE_PRODUCT_BY_CATEGORY_SUCCESS,
      value: { ..._res },
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getListProductCategorySlider() {
  try {
    let _res = yield call(SERVICES.getProductCategorySlider);
    const { data } = _res;

    yield put({
      type: Redux.GET_LIST_PRODUCT_CATEGORY_SLIDER,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_BY_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(Saga.GET_PRODUCT_BY_CATEGORY_LIST, getListProductCategories),
    takeEvery(
      Saga.GET_PRODUCT_BY_SUB_CATEGORY_LIST,
      getListProductSubCategories
    ),
    takeEvery(
      Saga.GET_MORE_PRODUCT_BY_CATEGORY_LIST,
      getMoreListProductCategories
    ),
    takeEvery(
      Saga.GET_LIST_PRODUCT_PREMIUM_SLIDER,
      getListProductPremiumSlider
    ),
    takeEvery(Saga.GET_LIST_PRODUCT_SLIDER, getListProductSlider),
    takeEvery(
      Saga.GET_LIST_PRODUCT_CATEGORY_SLIDER,
      getListProductCategorySlider
    ),
  ]);
}
