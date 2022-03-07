import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.RECIPESEARCH;

const defaultState = {
  loading: true,
  error: null,
  recipeSearched: [],
};

function searchedRecipeReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_RECIPE_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        recipeSearched: action.value,
      };
    case Redux.GET_RECIPE_SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_RECIPE_SEARCH_FAILURE:
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

export default searchedRecipeReducer;
