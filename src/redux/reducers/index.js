import { combineReducers } from 'redux';
import { authReducers } from './authReducers';
import { mainReducers } from './mainReducers';
import { storeReducers } from './storeReducers';

export default combineReducers({
  auth: authReducers,
  main: mainReducers,
  store: storeReducers,
});
