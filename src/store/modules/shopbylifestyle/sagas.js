import { all, takeEvery, put, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.PRODUCT_DIET;

export function* getListProductDietByLifestyle() {
  try {
    // yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getProductdietByLifestyle);
    const { response } = _res;

    yield put({
      type: Redux.GET_PRODUCT_DIET_BY_LIFESTYLE_SUCCESS,
      value: response,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_PRODUCT_DIET_BY_LIFESTYLE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(
      Saga.GET_PRODUCT_DIET_BY_LIFESTYLE,
      getListProductDietByLifestyle
    ),
  ]);
}
