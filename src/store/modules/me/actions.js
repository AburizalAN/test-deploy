import TYPES from './constants';

function updateFormValues(values) {
  return { type: TYPES.ME.Redux.UPDATE_FORM_VALUES, values };
}

function updateFormSubmitting(submitting) {
  return { type: TYPES.ME.Redux.UPDATE_FORM_VALUES, submitting };
}

function getProfile() {
  return {
    type: TYPES.ME.Saga.GET_PROFILE,
  };
}

function editProfile(data) {
  return { type: TYPES.ME.Saga.EDIT_PROFILE, data };
}

function changePassword(data) {
  return { type: TYPES.ME.Saga.CHANGE_PASSWORD, data };
}

function addAddress(data) {
  return {
    type: TYPES.ME.Saga.ADD_ADDRESS,
    data,
  };
}

function editAddress(data) {
  return {
    type: TYPES.ME.Saga.EDIT_ADDRESS,
    data,
  };
}

function setMainAddress(data) {
  return {
    type: TYPES.ME.Saga.SET_MAIN_ADDRESS,
    data,
  };
}

function deleteAddress(addressId, addressLabel) {
  return {
    type: TYPES.ME.Saga.DELETE_ADDRESS,
    addressId,
    addressLabel,
  };
}

function getWishlist(data) {
  return {
    type: TYPES.ME.Saga.GET_WISHLIST,
    data,
  };
}

function setWishlist(data) {
  return {
    type: TYPES.ME.GET_WISHLIST_SUCCESS,
    wishlist: data,
  };
}

export default {
  me: {
    updateFormValues,
    updateFormSubmitting,
    getProfile,
    editProfile,
    changePassword,
    addAddress,
    editAddress,
    setMainAddress,
    deleteAddress,
    getWishlist,
    setWishlist,
  },
};
