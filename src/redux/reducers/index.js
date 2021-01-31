import { combineReducers } from 'redux';
import { authReducers } from './authReducers';
import { mainReducers } from './mainReducers';
import { storeReducers } from './storeReducers';
import { searchReducers } from './searchReducers';
import { wikiReducers } from './wikiReducers';
import { wikiDetailReducers } from './wikiDetailReducers';

export default combineReducers({
  auth: authReducers,
  main: mainReducers,
  store: storeReducers,
  search: searchReducers,
  wiki: wikiReducers,
  wikiDetail: wikiDetailReducers,
});
