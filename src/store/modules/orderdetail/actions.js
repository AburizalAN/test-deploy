import TYPES from './constants';

function getDetail(id) {
  return {
    type: TYPES.ORDERDETAIL.Saga.GET_ORDER_DETAIL_LIST,
    id,
  };
}

export default {
  orderDetail: {
    getDetail,
  },
};
