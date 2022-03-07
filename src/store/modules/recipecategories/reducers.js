import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.RECIPECATEGORIES;

const defaultState = {
  loading: true,
  error: null,
  listRecipeCategories: [],
};

function recipeCategoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_RECIPE_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        listRecipeCategories: action.value,
      };
    case Redux.GET_RECIPE_CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_RECIPE_CATEGORIES_FAILURE:
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

export default recipeCategoriesReducer;
