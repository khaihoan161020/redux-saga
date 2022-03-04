import { TOGGLE_ADD_MODAL,TOGGLE_CLOSE_MODAL, TOGGLE_EDIT_MODAL } from "./constant";

export function modalAddUser () {
    return {
        type: TOGGLE_ADD_MODAL
    }
} 

export function modalEditUser (id) {
    return {
        type: TOGGLE_EDIT_MODAL,
        payload: id
    }
} 
export function modalCloseUser () {
    return {
        type: TOGGLE_CLOSE_MODAL
    }
} 