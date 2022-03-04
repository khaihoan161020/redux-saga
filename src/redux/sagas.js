import { all, fork } from 'redux-saga/effects';

import watcherAdminLoginSaga from './modules/admin/saga' ;
import {watcherAddUserSaga, watcherDeleteUserSaga, watcherEditSaga} from './modules/user/saga'

export default function* rootSaga() {
  yield all([
    fork(watcherAdminLoginSaga),
    fork(watcherAddUserSaga),
    fork(watcherDeleteUserSaga),
    fork(watcherEditSaga),
  ]);
}

