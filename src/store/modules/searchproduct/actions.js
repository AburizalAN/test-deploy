import TYPES from './constants';

function getListSearch({ search, page = 1, pagesize = 3 }) {
  return {
    type: TYPES.SEARCH.Saga.GET_SEARCH_LIST,
    search,
    page,
    pagesize,
  };
}

export default {
  search: {
    getListSearch,
  },
};
