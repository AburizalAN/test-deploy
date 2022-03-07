import TYPES from './constants';

function getCategoryPost(category) {
  return {
    type: TYPES.POSTCATEGORY.Saga.GET_POST_CATEGORY_LIST,
    category,
  };
}

export default {
  postCategory: {
    getCategoryPost,
  },
};
