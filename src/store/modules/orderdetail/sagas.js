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

const { Redux, Saga } = TYPES.ORDERDETAIL;

export function* getDetail(params) {
  try {
    let _res = yield call(SERVICES.getDetail, params);
    const { data } = _res;

    yield put({
      type: Redux.GET_ORDER_DETAIL_SUCCESS,
      value: { data },
    });
  } catch (error) {
    yield put({
      type: Redux.GET_ORDER_DETAIL_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_ORDER_DETAIL_LIST, getDetail)]);
}
