import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.POSTRELATED;

const defaultState = {
  loading: true,
  error: null,
  listPostRelated: [],
};

function recipePostReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_POST_RELATED_SUCCESS:
      return {
        ...state,
        loading: false,
        listPostRelated: action.value,
      };
    case Redux.GET_POST_RELATED_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_POST_RELATED_FAILURE:
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

export default recipePostReducer;
