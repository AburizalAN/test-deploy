import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.RECIPE;

const defaultState = {
  loading: true,
  error: null,
  listRecipes: [],
};

function recipeCatalogReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_RECIPE_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        listRecipes: action.value,
      };
    case Redux.GET_RECIPE_CATALOG_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_RECIPE_CATALOG_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case Redux.RESET:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
}

export default recipeCatalogReducer;
