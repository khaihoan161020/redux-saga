import { USER_ADD_REQUEST, USER_DELETE_REQUEST, USER_EDIT_REQUEST , USER_GET_BY_ID_REQUEST } from "./constant"

export function addUser (data) {
    return {
        type: USER_ADD_REQUEST,
        payload: data,
    }
} 

export function getUserByID (data) {
    return {
        type: USER_GET_BY_ID_REQUEST,
        payload: data,
    }
} 

export function editdUser (data) {
    return {
        type: USER_EDIT_REQUEST,
        payload: data,
    }
} 

export function deleteUser (id) {
    return {
        type: USER_DELETE_REQUEST,
        payload: id,
    }
} 