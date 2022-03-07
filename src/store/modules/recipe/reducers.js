import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.RECIPE;

const defaultState = {
  loading: true,
  error: null,
  listRecipes: [],
  listCategory: [],
  listLatestRecipe: [],
  listPopularRecipe: [],
};

function recipeReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        listRecipes: action.value,
      };
    case Redux.GET_RECIPE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_RECIPE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case Redux.GET_RECIPE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        listCategory: action.value,
      };
    case Redux.GET_RECIPE_CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_RECIPE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case Redux.GET_LATEST_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        listLatestRecipe: action.value,
      };
    case Redux.GET_LATEST_RECIPE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_LATEST_RECIPE_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case Redux.GET_POPULAR_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        listPopularRecipe: action.value,
      };
    case Redux.GET_POPULAR_RECIPE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_POPULAR_RECIPE_FAILURE:
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

export default recipeReducer;
