import { all, takeEvery, put, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.RECIPESEARCH;

export function* getSearchedRecipeSaga(params) {
  try {
    yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getSearchedRecipe, params.keyword);
    const { data } = _res;
    yield put({ type: Redux.GET_RECIPE_SEARCH_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_SEARCH_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_RECIPE_SEARCH_LIST, getSearchedRecipeSaga)]);
}
