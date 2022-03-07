import { all, takeEvery, put, call } from 'redux-saga/effects';
import TYPES from './constants';
import SERVICES from './services';

const { Redux, Saga } = TYPES.RECIPETRICK;

export function* getListRecipeTipsAndTrick() {
  try {
    let _res = yield call(SERVICES.getRecipeTipsAndTrick);
    const { data } = _res;
    yield put({ type: Redux.GET_RECIPE_TIPS_AND_TRICK_SUCCESS, value: data });
  } catch (error) {
    yield put({
      type: Redux.GET_RECIPE_TIPS_AND_TRICK_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* () {
  yield all([
    takeEvery(Saga.GET_RECIPE_TIPS_AND_TRICK_LIST, getListRecipeTipsAndTrick),
  ]);
}
