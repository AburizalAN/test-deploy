import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.RECIPE;

export function* getListRecipe() {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getRecipe);
    const { data } = _res;

    yield put({ type: Redux.GET_RECIPE_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}
export function* getListBahanUtama() {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getBahanUtama);
    const { data } = _res;

    yield put({ type: Redux.GET_RECIPE_CATEGORY_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}
export function* getListDietary() {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getDietary);
    const { data } = _res;

    yield put({ type: Redux.GET_RECIPE_CATEGORY_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}
export function* getListCaraMemasak() {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getCaraMemasak);
    const { data } = _res;

    yield put({ type: Redux.GET_RECIPE_CATEGORY_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}
export function* getListJenisHidangan() {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getJenisHidangan);
    const { data } = _res;

    yield put({ type: Redux.GET_RECIPE_CATEGORY_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}
export function* getListOther() {
  try {
    // let _res = yield call(SERVICES.getCaraMemasak);
    // const { data } = _res;
    yield put({ type: Redux.RESET });
    yield put({ type: Redux.GET_RECIPE_CATEGORY_SUCCESS, value: [] });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_CATEGORY_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}
export function* getListLatestRecipe() {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getLatestRecipe);
    const { data } = _res;

    yield put({ type: Redux.GET_LATEST_RECIPE_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_LATEST_RECIPE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}
export function* getListPopularRecipe() {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getPopularRecipe);
    const { data } = _res;

    yield put({ type: Redux.GET_POPULAR_RECIPE_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_POPULAR_RECIPE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_RECIPE_LIST, getListRecipe)]);
  yield all([takeEvery(Saga.GET_RECIPE_BAHAN_UTAMA_LIST, getListBahanUtama)]);
  yield all([takeEvery(Saga.GET_RECIPE_DIETARY_LIST, getListDietary)]);
  yield all([takeEvery(Saga.GET_RECIPE_CARA_MEMASAK_LIST, getListCaraMemasak)]);
  yield all([takeEvery(Saga.GET_RECIPE_OTHER, getListOther)]);
  yield all([
    takeEvery(Saga.GET_RECIPE_JENIS_HIDANGAN_LIST, getListJenisHidangan),
  ]);
  yield all([takeEvery(Saga.GET_LATEST_RECIPE_LIST, getListLatestRecipe)]);
  yield all([takeEvery(Saga.GET_POPULAR_RECIPE_LIST, getListPopularRecipe)]);
}
