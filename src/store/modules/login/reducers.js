import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.LOGIN;

const defaultState = {
  loading: false,
  error: null,
};

function loginPage(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.AUTHORIZE_LOADING:
      return { ...state, loading: true };

    case Redux.AUTHORIZE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case Redux.AUTHORIZE_FAILURE:
      return {
        ...state,
        loading: false,
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

export default loginPage;
