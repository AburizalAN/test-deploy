import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.RECIPERELATED;

const defaultState = {
  loading: true,
  error: null,
  listRecipesRelated: [],
};

function recipeRelatedReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_RECIPE_RELATED_SUCCESS:
      return {
        ...state,
        loading: false,
        listRecipesRelated: action.value,
      };
    case Redux.GET_RECIPE_RELATED_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_RECIPE_RELATED_FAILURE:
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

export default recipeRelatedReducer;
