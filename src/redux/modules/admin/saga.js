import { put, takeLatest, call, delay  } from 'redux-saga/effects';

import { fetchLoginAdmin } from './api';
import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_ERROR } from './constant';
import { loginAdmin } from './action';
function* handleAdminLogin(data) {
    try {
        yield call(fetchLoginAdmin);
        yield put({type: ADMIN_LOGIN_SUCCESS, payload: data.payload});
    } catch (error) {
        yield put({type: ADMIN_LOGIN_ERROR, message: error.message});
    }
   
}

export default function*  watcherAdminLoginSaga() {
    yield takeLatest(ADMIN_LOGIN_REQUEST, handleAdminLogin)
}

