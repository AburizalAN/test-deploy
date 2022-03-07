import TYPES from './constants';

function infoDetail() {
  return {
    type: TYPES.INFO.Saga.GET_INFO_LIST,
  };
}

function postFirebaseToken(body) {
  return {
    type: TYPES.INFO.Saga.POST_FIREBASE_LIST,
    body,
  };
}

export default {
  info: {
    infoDetail,
    postFirebaseToken,
  },
};
