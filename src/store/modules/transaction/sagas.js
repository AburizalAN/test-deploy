import {
  all,
  takeEvery,
  put,
  fork,
  select,
  call,
  takeLatest,
} from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';
import Cookie from 'js-cookie';

const { Redux, Saga } = TYPES.TRANSACTION;

function unauthorized() {
  Cookie.remove('AMToken');
  window.location.reload();
}

export function* getTransactionList() {
  try {
    yield put({ type: Redux.GET_TRANSACTION_LIST_LOADING });

    const {
      profile: { id: customerId },
      filters: {
        status,
        dateRange: [startDate, endDate],
      },
    } = yield select((state) => ({ ...state.me, ...state.transaction }));

    const res = yield call(SERVICES.getTransactionList, {
      customerId,
      status,
      startDate,
      endDate,
    });

    if (!res?.data) {
      if (res.status === 401) unauthorized();

      throw res.error.message;
    }

    yield put({
      type: Redux.GET_TRANSACTION_LIST_SUCCESS,
      transactionList: res.data.items,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_TRANSACTION_LIST_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getOrderDetail({ orderId }) {
  try {
    yield put({ type: Redux.GET_ORDER_DETAIL_LOADING });

    const res = yield call(SERVICES.getOrderDetail, orderId);

    if (!res?.data) {
      if (res.status === 401) unauthorized();

      throw res.error.message;
    }

    yield put({
      type: Redux.GET_ORDER_DETAIL_SUCCESS,
      orderDetail: res.data,
    });
  } catch (error) {
    yield put({
      type: Redux.GET_ORDER_DETAIL_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* transactionSagas() {
  yield all([
    takeLatest(Saga.GET_TRANSACTION_LIST, getTransactionList),
    takeLatest(Saga.GET_ORDER_DETAIL, getOrderDetail),
  ]);
}
