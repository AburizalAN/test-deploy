import TYPES from './constants';

function setClaimProduct(data) {
  return { type: TYPES.CLAIM_PRODUCT.Saga.SET_CLAIM_PRODUCT, data };
}

export default {
  claimProduct: {
    setClaimProduct,
  },
};
