import TYPES from './constants';

function authorize(username, password) {
  return {
    type: TYPES.LOGIN.Saga.AUTHORIZE,
    username,
    password,
  };
}

export default {
  login: {
    authorize,
  },
};
