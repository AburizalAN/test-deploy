import TYPES from './constants';

function getReferalCode() {
  return {
    type: TYPES.REFERAL.Saga.GET_REFERAL_CODE,
  };
}

export default {
  referal: {
    getReferalCode,
  },
};
