import TYPES from './constants';
import { HYDRATE } from 'next-redux-wrapper';

const { Redux } = TYPES.ALERT;

const defaultState = {
  visible: false,
  message: '',
  type: '',
};

function alertReducer(state = defaultState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case Redux.SET_ALERT:
      return { ...state, ...action.payload, visible: true };

    case Redux.CLOSE_ALERT:
      return { ...state, message: '', type: '', visible: false };

    default:
      return state;
  }
}

export default alertReducer;
