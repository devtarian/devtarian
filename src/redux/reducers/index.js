import { combineReducers } from 'redux';
import { authReducers } from './authReducers';
import { mainReducers } from './mainReducers';
import { storeReducers } from './storeReducers';
import { searchReducers } from './searchReducer';
import { wikiReducers } from './wikiReducers';

export default combineReducers({
  auth: authReducers,
  main: mainReducers,
  store: storeReducers,
  search: searchReducers,
  wiki: wikiReducers,

});
