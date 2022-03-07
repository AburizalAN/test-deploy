import TYPES from './constants';

function getListPost() {
  return {
    type: TYPES.POST.Saga.GET_POST_LIST,
  };
}
function getPostDetail(slug) {
  return {
    type: TYPES.POST.Saga.GET_POST_DETAIL,
    slug,
  };
}
function getListPostTemanLama() {
  return {
    type: TYPES.POST.Saga.GET_POST_TEMAN_LAMA_LIST,
  };
}

export default {
  posts: {
    getListPost,
    getListPostTemanLama,
    getPostDetail,
  },
};
