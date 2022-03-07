import { all, takeEvery, put, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.POSTSEARCH;

export function* getSearchedPostSaga(params) {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getSearchedPost, params.keyword);
    const { data } = _res;
    yield put({ type: Redux.GET_POST_SEARCH_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_POST_SEARCH_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_POST_SEARCH_LIST, getSearchedPostSaga)]);
}
