import TYPES from './constants';

function getBeautyPost() {
  return {
    type: TYPES.POSTBEAUTY.Saga.GET_BEAUTY_LIST,
  };
}

export default {
  postBeauty: {
    getBeautyPost,
  },
};
