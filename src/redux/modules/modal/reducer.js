import { TOGGLE_EDIT_MODAL, TOGGLE_ADD_MODAL, TOGGLE_CLOSE_MODAL } from "./constant";

const initalState = {
  id: null,
  isToggle: false
};

const modalReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_MODAL:
      return { ...state, id: null, isToggle: !state.isToggle };
    case TOGGLE_EDIT_MODAL:
      return { ...state, id: action.payload, isToggle: !state.isToggle };
    case TOGGLE_CLOSE_MODAL:
        return {...state, id: null, isToggle: false}
    default:
      return state;
  }
};

export default modalReducer;
