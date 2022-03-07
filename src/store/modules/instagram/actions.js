import TYPES from './constants';

function getListInstagram() {
  return {
    type: TYPES.INSTAGRAM.Saga.GET_INSTAGRAM_LIST,
  };
}

export default {
  instagram: {
    getListInstagram,
  },
};
