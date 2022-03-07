import TYPES from './constants';

function setClaimVoucher(data) {
  return { type: TYPES.CLAIM_VOUCHER.Saga.SET_CLAIM_VOUCHER, data };
}

export default {
  claimVoucher: {
    setClaimVoucher,
  },
};
