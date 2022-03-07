import TYPES from './constants';

function getListTiktok() {
  return {
    type: TYPES.TIKTOK.Saga.GET_TIKTOK_LIST,
  };
}

export default {
  tiktok: {
    getListTiktok,
  },
};
