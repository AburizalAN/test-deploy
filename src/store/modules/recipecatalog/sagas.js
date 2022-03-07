import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.RECIPE;

export function* getListRecipe(params) {
  try {
    // yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getRecipe, params.catalog);
    const { data } = _res;

    yield put({ type: Redux.GET_RECIPE_CATALOG_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_CATALOG_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_RECIPE_CATALOG_LIST, getListRecipe)]);
}
