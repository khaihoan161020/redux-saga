import Item from "antd/lib/list/Item";
import {
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_DELETE_SUCCESS,
  USER_EDIT_SUCCESS,
} from "./constant";

const initalState = {
  loading: false,
  list: [],
};

const usersReducer = (state = initalState, action) => {

  switch (action.type) {
    case USER_ADD_REQUEST:
      return { ...state, loading: true };
    case USER_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, action.payload],
      };
    case USER_EDIT_SUCCESS:
        return {
          ...state, list: state.list.map(item => {
            return item.id === action.payload.id ? action.payload : item;
          })
        }
     
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        loading: action.payload1.payload,
        list: state.list.filter((item) => item.id !== action.payload1)
      };
    default:
      return state;
  }
};

export default usersReducer;
