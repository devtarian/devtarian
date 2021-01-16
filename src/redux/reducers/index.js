import { combineReducers } from 'redux';
import { authReducers } from './authReducers';
import { mainReducers } from './mainReducers';
import { storeReducers } from './storeReducers';
import { searchReducers } from './searchReducer';

export default combineReducers({
  auth: authReducers,
  main: mainReducers,
  store: storeReducers,
  search: searchReducers,
});
