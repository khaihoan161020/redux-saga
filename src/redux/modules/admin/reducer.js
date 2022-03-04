import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERROR,
} from "./constant";
const initalState = {
  isLogin: true,
  adminName: "",
  loading: false,
  error: null,
};

const adminReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state, loading: true};

    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loading: false ,isLogin: true, adminName: action.payload };

    case ADMIN_LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default adminReducer;
