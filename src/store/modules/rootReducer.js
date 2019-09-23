import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import meetups from './meetups/reducers';

export default combineReducers({ auth, user, meetups });
