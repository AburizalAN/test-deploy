import { all, takeEvery, put, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.FLASHSALE;

export function* getFlashSaleData() {
  try {
    let res = yield call(SERVICES.getFlashSaleData);

    const { data } = res;

    yield put({ type: Redux.GET_FLASHSALE_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: Redux.GET_FLASHSALE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getFlashSaleProducts({ id }) {
  yield put({ type: Redux.FLASHSALE_LOADING, value: true });
  try {
    let res = yield call(SERVICES.getFlashSaleProducts, id);
    const { data } = res;
    yield put({ type: Redux.GET_FLASHSALE_PRODUCTS, payload: data });
  } catch (error) {
    yield put({
      type: Redux.GET_FLASHSALE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getFlashSaleDummy() {
  try {
    const data = [
      {
        id: '4',
        title: 'Flash Sale 03 Februari',
        start_time: '2022-02-04 00:01:00',
        end_time: '2022-02-04 00:20:00',
        status: '1',
        styles: null,
        is_exclusive: '0',
        use_coupon: '0',
        max_customer_checkout: '0',
        max_qty_per_product: '0',
        max_product_in_cart: '0',
        created_at: '2021-05-03 01:57:32',
        updated_at: '2021-05-03 01:57:32',
      },
      {
        id: '3',
        title: 'Flash Sale 03 Februari',
        start_time: '2022-02-04 00:21:00',
        end_time: '2022-02-04 00:30:00',
        status: '1',
        styles: null,
        is_exclusive: '0',
        use_coupon: '0',
        max_customer_checkout: '0',
        max_qty_per_product: '0',
        max_product_in_cart: '0',
        created_at: '2022-02-03 22:30:32',
        updated_at: '2022-02-03 23:57:32',
      },
      {
        id: '2',
        title: 'Flash Sale 03 Februari',
        start_time: '2022-02-04 00:31:00',
        end_time: '2022-02-04 00:40:00',
        status: '1',
        styles: null,
        is_exclusive: '0',
        use_coupon: '0',
        max_customer_checkout: '0',
        max_qty_per_product: '0',
        max_product_in_cart: '0',
        created_at: '2021-05-03 01:57:32',
        updated_at: '2021-05-03 01:57:32',
      },
    ];
    yield put({ type: Redux.GET_FLASHSALE_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: Redux.GET_FLASHSALE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(Saga.GET_FLASHSALE_DATA, getFlashSaleData),
    takeEvery(Saga.GET_FLASHSALE_PRODUCTS, getFlashSaleProducts),
    takeEvery(Saga.GET_FLASHSALE_DUMMY, getFlashSaleDummy),
  ]);
}
