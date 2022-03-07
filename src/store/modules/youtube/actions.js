import TYPES from './constants';

function getListYoutube() {
  return {
    type: TYPES.YOUTUBE.Saga.GET_YOUTUBE_LIST,
  };
}

export default {
  youtube: {
    getListYoutube,
  },
};
