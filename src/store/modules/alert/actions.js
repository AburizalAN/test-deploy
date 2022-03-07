import TYPES from './constants';

function setAlert({ message = '', type = '' }) {
  return {
    type: TYPES.ALERT.Redux.SET_ALERT,
    payload: { message, type },
  };
}

function closeAlert() {
  return { type: TYPES.ALERT.Redux.CLOSE_ALERT };
}

export default {
  alert: {
    setAlert,
    closeAlert,
  },
};
