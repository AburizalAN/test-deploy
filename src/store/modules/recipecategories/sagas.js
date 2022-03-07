import { all, takeEvery, put, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.RECIPECATEGORIES;

export function* getListRecipeCategories() {
  try {
    // yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getRecipeCategories);
    const { data } = _res;

    yield put({ type: Redux.GET_RECIPE_CATEGORIES_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_CATEGORIES_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(Saga.GET_RECIPE_CATEGORIES_LIST, getListRecipeCategories),
  ]);
}
