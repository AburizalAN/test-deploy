import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux, Saga } = TYPES.REFERAL;

const defaultState = {
  loading: true,
  error: null,
  listReferals: [],
};

function ReferalReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case Redux.GET_REFERAL_SUCCESS:
      return {
        ...state,
        loading: false,
        listReferals: action.value,
      };
    case Redux.GET_REFERAL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Redux.GET_REFERAL_FAILURE:
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

export default ReferalReducer;
