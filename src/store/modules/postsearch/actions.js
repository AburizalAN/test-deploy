import TYPES from './constants';

function getPostSearched(keyword) {
  return {
    type: TYPES.POSTSEARCH.Saga.GET_POST_SEARCH_LIST,
    keyword,
  };
}

export default {
  postSearch: {
    getPostSearched,
  },
};
