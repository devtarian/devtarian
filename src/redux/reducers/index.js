import { combineReducers } from 'redux';
import { authReducers } from './authReducers';
import { storeReducers } from './storeReducers';

export default combineReducers({
  auth: authReducers,
  store: storeReducers,
});
