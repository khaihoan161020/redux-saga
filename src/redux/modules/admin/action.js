import {  ADMIN_LOGIN_REQUEST } from "./constant";

export function loginAdmin(data) {
    return {
      type: ADMIN_LOGIN_REQUEST,
      payload: data
    };
  }