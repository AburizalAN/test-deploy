import {
  all,
  call,
  delay,
  fork,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import TYPES from './constants';
import ALERT_TYPES from '../alert/constants';
import SERVICES from './services';
import Cookie from 'js-cookie';

const { Redux, Saga } = TYPES.ME;

function unauthorized() {
  Cookie.remove('AMToken');
  window.location.reload();
}

export function* getProfile() {
  try {
    yield put({ type: Redux.GET_PROFILE_LOADING });

    const res = yield call(SERVICES.me);

    if (!res?.data) {
      if (res.status === 401) unauthorized();

      throw res.error.message;
    }

    yield put({ type: Redux.GET_PROFILE_SUCCESS, profile: res.data });
  } catch (error) {
    yield put({
      type: Redux.GET_PROFILE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* editProfile({ data }) {
  try {
    yield put({ type: Redux.EDIT_PROFILE_LOADING });

    const { profile } = yield select((state) => state.me);
    const res = yield call(SERVICES.editCustomer, {
      profile,
      newProfile: data,
    });

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.ADD_ADDRESS_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: { message: 'Perubahan berhasil disimpan', type: 'success' },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.EDIT_PROFILE_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* changePassword({ data }) {
  try {
    yield put({ type: Redux.CHANGE_PASSWORD_LOADING });

    const res = yield call(SERVICES.changePassword, data);

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.CHANGE_PASSWORD_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: { message: 'Ubah kata sandi berhasil', type: 'success' },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.CHANGE_PASSWORD_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
    yield delay(5000);
    yield put({
      type: Redux.RESET,
    });
  }
}

export function* addAddress({ data }) {
  try {
    yield put({ type: Redux.ADD_ADDRESS_LOADING });

    const { profile } = yield select((state) => state.me);
    const res = yield call(SERVICES.addAddress, { profile, address: data });

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.ADD_ADDRESS_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: {
        message: `Alamat ${data.addressLabel} berhasil ditambahkan${
          data.isMainAddress ? ' dan menjadi alamat utama' : ''
        }`,
        type: 'success',
      },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.ADD_ADDRESS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* editAddress({ data }) {
  try {
    yield put({ type: Redux.EDIT_ADDRESS_LOADING });

    const { profile } = yield select((state) => state.me);
    const res = yield call(SERVICES.editAddress, { profile, address: data });

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.EDIT_ADDRESS_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: {
        message: `Alamat ${data.addressLabel} berhasil diubah`,
        type: 'success',
      },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.EDIT_ADDRESS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* setMainAddress({ data }) {
  try {
    yield put({ type: Redux.SET_MAIN_ADDRESS_LOADING });

    const { profile } = yield select((state) => state.me);
    const res = yield call(SERVICES.editAddress, { profile, address: data });

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.SET_MAIN_ADDRESS_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: {
        message: `Alamat ${data.addressLabel} berhasil menjadi alamat utama`,
        type: 'success',
      },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.SET_MAIN_ADDRESS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* deleteAddress({ addressId, addressLabel }) {
  try {
    yield put({ type: Redux.DELETE_ADDRESS_LOADING });

    const { profile } = yield select((state) => state.me);
    const res = yield call(SERVICES.deleteAddress, { profile, addressId });

    if (!res?.data) {
      throw res.error.message;
    }

    yield put({ type: Redux.DELETE_ADDRESS_SUCCESS });

    yield put({
      type: ALERT_TYPES.ALERT.Redux.SET_ALERT,
      payload: {
        message: `Alamat ${addressLabel} berhasil dihapus`,
        type: 'success',
      },
    });
    yield delay(5000);
    yield put({
      type: ALERT_TYPES.ALERT.Redux.CLOSE_ALERT,
    });
  } catch (error) {
    yield put({
      type: Redux.DELETE_ADDRESS_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export function* getWishlist() {
  try {
    yield put({ type: Redux.GET_WISHLIST_LOADING });

    const res = yield call(SERVICES.wishlist);

    if (!res?.data) {
      if (res.status === 401) unauthorized();

      throw res.error.message;
    }

    yield put({ type: Redux.GET_WISHLIST_SUCCESS, wishlist: res.data });
  } catch (error) {
    yield put({
      type: Redux.GET_WISHLIST_FAILURE,
      error: typeof error != 'string' ? error.toString() : error,
    });
  }
}

export default function* meSagas() {
  yield all([
    takeEvery(Saga.GET_PROFILE, getProfile),
    takeLatest(Saga.EDIT_PROFILE, editProfile),
    takeLatest(Saga.CHANGE_PASSWORD, changePassword),
    takeLatest(Saga.ADD_ADDRESS, addAddress),
    takeLatest(Saga.EDIT_ADDRESS, editAddress),
    takeLatest(Saga.SET_MAIN_ADDRESS, setMainAddress),
    takeLatest(Saga.DELETE_ADDRESS, deleteAddress),
    takeLatest(Saga.GET_WISHLIST, getWishlist),
  ]);
}
