import { all, takeEvery, put, fork, select, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.RECIPERELATED;

export function* getListRecipeRelated(params) {
  try {
    console.log(params.id);
    // yield put({ type: Redux.RESET });
    let _res = yield call(SERVICES.getRecipeRelated, params.id);
    const { data } = _res;
    yield put({ type: Redux.GET_RECIPE_RELATED_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_RELATED_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([takeEvery(Saga.GET_RECIPE_RELATED_LIST, getListRecipeRelated)]);
}
