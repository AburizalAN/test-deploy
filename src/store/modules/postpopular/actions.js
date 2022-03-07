import TYPES from './constants';

function getPopularPost() {
  return {
    type: TYPES.POSTPOPULAR.Saga.GET_POPULAR_LIST,
  };
}

export default {
  postPopular: {
    getPopularPost,
  },
};
