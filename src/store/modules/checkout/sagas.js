import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';
import Cookie from 'js-cookie';

const { Redux, Saga } = TYPES.CHECKOUT;

function unauthorized() {
  Cookie.remove('AMToken');
  window.location.reload();
}

export function* getCheckoutData() {
  try {
    let _res = yield call(SERVICES.getCheckoutData);

    if (!_res?.data) {
      console.log('error', _res);
      if (_res.status === 401) unauthorized();

      throw _res.error.message;
    }

    const { data } = _res;

    const payload = {
      subtotal: data[0].subtotal,
      quote_id: data[0].quote_id,
      checkoutList: data[0]?.cart_data,
      address_list: data[0].address_list,
      payment_groups: data[0].payment_groups,
      discount: {
        amount: data[0].discount_amount,
        desc: data[0].discount_desc,
      },
      gimmick: {
        data: data[0].gimmick_data,
        notif: data[0].gimmick_notif,
      },
    };
    yield put({ type: Redux.CHECKOUT_LOADING, value: false });
    yield put({ type: Redux.SET_LOADING_COUNTER, value: false });
    yield put({ type: Redux.GET_CHECKOUT_SUCCESS, value: payload });
  } catch (error) {
    yield put({ type: Redux.CHECKOUT_LOADING, value: false });
    yield put({ type: Redux.SET_LOADING_COUNTER, value: false });
    yield put({
      type: Redux.GET_CHECKOUT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* updateQty({ cartItem }) {
  try {
    yield put({ type: Redux.SET_LOADING_COUNTER, value: true });
    let _res = yield call(SERVICES.updateQty, cartItem);
    const { data } = _res;

    if (!data) {
      throw _res.error.message;
    } else {
      yield getCheckoutData();
    }
  } catch (error) {
    yield put({ type: Redux.SET_LOADING_COUNTER, value: false });
    yield put({
      type: Redux.GET_CHECKOUT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* updateSalesRule({ salesRule }) {
  try {
    let _res = yield call(SERVICES.updateSalesRule, salesRule);
    const { data } = _res;

    if (!data) {
      throw _res.error.message;
    }

    const payload = {
      summary_order: {
        subtotal: data.subtotal,
        discount: data.discount_amount,
        shipping: data.shipping_amount,
        total: data.grand_total,
      },
      shipping_method: data.shipping_method,
    };

    yield put({ type: Redux.UPDATE_SALES_RULE, payload });
  } catch (error) {
    yield put({
      type: Redux.GET_CHECKOUT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getCheckoutStatus({ id }) {
  try {
    let _res = yield call(SERVICES.getCheckoutStatus, id);
    const { data } = _res;

    if (!data) {
      throw _res.error.message;
    }

    const payload = data[0];

    yield put({ type: Redux.GET_CHECKOUT_STATUS, payload });
  } catch (error) {
    yield put({
      type: Redux.GET_CHECKOUT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* submitOrder({ payload }) {
  yield put({ type: Redux.CHECKOUT_LOADING_PAYMENT, value: true });
  try {
    let _res = yield call(SERVICES.submitOrder, payload);
    const { data } = _res;

    yield put({ type: Redux.CHECKOUT_LOADING_PAYMENT, value: false });
  } catch (error) {
    yield put({
      type: Redux.GET_CHECKOUT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
    yield put({ type: Redux.CHECKOUT_LOADING_PAYMENT, value: false });
  }
}

export function* deleteCartItem({ id }) {
  yield put({ type: Redux.CHECKOUT_LOADING, value: true });
  try {
    let _res = yield call(SERVICES.deleteCartItem, id);
    const { data } = _res;

    if (!data) {
      throw { message: 'Error delete cart item' };
    } else {
      yield getCheckoutData();
    }
  } catch (error) {
    yield put({ type: Redux.CHECKOUT_LOADING, value: false });
    yield put({
      type: Redux.GET_CHECKOUT_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(Saga.GET_CHECKOUT, getCheckoutData),
    takeEvery(Saga.UPDATE_QTY, updateQty),
    takeEvery(Saga.UPDATE_SALES_RULE, updateSalesRule),
    takeEvery(Saga.GET_CHECKOUT_STATUS, getCheckoutStatus),
    takeEvery(Saga.DELETE_CART_ITEM, deleteCartItem),
  ]);
}
