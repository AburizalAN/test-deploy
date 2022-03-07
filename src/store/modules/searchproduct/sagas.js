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

const { Redux, Saga } = TYPES.SEARCH;

export function* getListProductBySearch(params) {
  try {
    yield put({
      type: Redux.GET_SEARCH_LOADING,
    });

    let _res = yield call(SERVICES.multipleApiSearch, params);
    let { data, article, recipe } = _res;
    data = data.data;

    yield put({
      type: Redux.GET_SEARCH_SUCCESS,
      value: { data, article, recipe },
    });
  } catch (error) {
    yield put({
      type: Redux.GET_SEARCH_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_SEARCH_LIST, getListProductBySearch)]);
}
