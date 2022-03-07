import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.POST;

export function* getListPosts() {
  try {
    let _res = yield call(SERVICES.getPost);
    const { data } = _res;

    yield put({ type: Redux.GET_POST_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_POST_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getDetailPost(params) {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getPostDetail, params.slug);
    const { data } = _res;
    yield put({ type: Redux.GET_POST_DETAIL_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_POST_DETAIL_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getListPostTemanLama() {
  try {
    let _res = yield call(SERVICES.getPostTemanMula);
    const { data } = _res;

    yield put({ type: Redux.GET_POST_TEMAN_LAMA_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_POST_TEMAN_LAMA_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_POST_LIST, getListPosts)]);
  yield all([takeEvery(Saga.GET_POST_DETAIL, getDetailPost)]);
  yield all([takeEvery(Saga.GET_POST_TEMAN_LAMA_LIST, getListPostTemanLama)]);
}
