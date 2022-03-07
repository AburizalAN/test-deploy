import TYPES from './constants';

function reset() {
  return { type: TYPES.SIGNUP.Redux.RESET };
}

function registerCustomer(data) {
  return { type: TYPES.SIGNUP.Saga.REGISTER_CUSTOMER, data };
}

export default {
  signup: {
    reset,
    registerCustomer,
  },
};
