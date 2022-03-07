import TYPES from './constants';

function getListPostRelated(id) {
  return {
    type: TYPES.POSTRELATED.Saga.GET_POST_RELATED_LIST,
    id,
  };
}

export default {
  postRelated: {
    getListPostRelated,
  },
};
