import { put, takeLatest, call, delay  } from 'redux-saga/effects';

import { fetchLoginAdmin } from '../admin/api';
import * as USER  from './constant';

// 
function* handleAddUser(data) {
    try {
        yield call(fetchLoginAdmin);
        yield put({type: USER.USER_ADD_SUCCESS, payload: data.payload});
    } catch (error) {
        yield put({type: USER.USER_ADD_ERROR, message: error.message});
    }
   
}
export function*  watcherAddUserSaga() {
    yield takeLatest(USER.USER_ADD_REQUEST, handleAddUser)
}


// 
function* handleDeleteUser(payload) {
    try {
        yield call(fetchLoginAdmin);
        yield put({type: USER.USER_DELETE_SUCCESS,  payload1: payload.payload});
    } catch (error) {
        yield put({type: USER.USER_DELETE_ERROR, message: error.message});
    }
}

export function*  watcherDeleteUserSaga() {
    yield takeLatest(USER.USER_DELETE_REQUEST, handleDeleteUser)
}

// GET USER BY ID

function* handleGetUserByID(payload) {
    try {
        yield call(fetchLoginAdmin);
        yield put({type: USER.USER_GET_BY_ID_SUCCESS,  payload1: payload.payload});
    } catch (error) {
        yield put({type: USER.USER_GET_BY_ID_ERROR, message: error.message});
    }
}

export function*  watcherGetUserByIDSaga() {
    yield takeLatest(USER.USER_GET_BY_ID_REQUEST, handleGetUserByID)
}

// EDIT USER

function* handleEditUserByID(payload) {
    try {
        yield call(fetchLoginAdmin);
        console.log('payload',payload)
        yield put({type: USER.USER_EDIT_SUCCESS,  payload: payload.payload});
    } catch (error) {
        yield put({type: USER.USER_EDIT_ERROR, message: error.message});
    }
}

export function*  watcherEditSaga() {
    yield takeLatest(USER.USER_EDIT_REQUEST, handleEditUserByID)
}


