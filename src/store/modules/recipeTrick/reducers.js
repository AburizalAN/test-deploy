import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.RECIPETRICK;

const defaultState = {
  loading: true,
  error: null,
  listRecipesTrickAndTrick: [],
};

function recipeTipsAndTrickReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_RECIPE_TIPS_AND_TRICK_SUCCESS:
      return {
        ...state,
        loading: false,
        listRecipesRelated: action.value,
      };
    case Redux.GET_RECIPE_TIPS_AND_TRICK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_RECIPE_TIPS_AND_TRICK_FAILURE:
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

export default recipeTipsAndTrickReducer;
