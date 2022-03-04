import adminReducer from './modules/admin/reducer';
import usersReducer from './modules/user/reducer';
import { combineReducers } from 'redux';
import modalReducer from './modules/modal/reducer';

const rootReducer = combineReducers({
        admin: adminReducer,
        users: usersReducer,
        modal: modalReducer
});
export default rootReducer;
