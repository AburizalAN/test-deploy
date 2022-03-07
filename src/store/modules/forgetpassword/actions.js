import TYPES from './constants';

function sendEmail(email) {
  return { type: TYPES.FORGET_PASSWORD.Saga.SEND_EMAIL, email };
}
/**
 * @param {Object} data Data request for api reset password.
 * @param {String} data.email
 * @param {String} data.resetToken
 * @param {String} data.newPassword
 * @return {Object} Action types for dispatching saga
 */
function resetPassword(data) {
  return { type: TYPES.FORGET_PASSWORD.Saga.RESET_PASSWORD, data };
}

export default {
  forgetPassword: {
    sendEmail,
    resetPassword,
  },
};
