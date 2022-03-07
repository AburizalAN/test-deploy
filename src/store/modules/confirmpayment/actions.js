import TYPES from './constants';

function setConfirmPayment(data) {
  return { type: TYPES.CONFIRM_PAYMENT.Saga.SET_CONFIRM_PAYMENT, data };
}

export default {
  confirm: {
    setConfirmPayment,
  },
};
