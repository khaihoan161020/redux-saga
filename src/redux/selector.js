import { createSelector } from "reselect";
import { usersSelector } from "./modules/user/selector";
import { modalSelector } from "./modules/modal/selector";
export const getUserByID = createSelector(
  usersSelector,
  modalSelector,
  (users, modal) => {
    // if(users.lists.length)
    //     return;
    return users.list.find((item) => {
    //   if (!modal.id) return item;
      return item.id === modal.id;
    });
  }
);
