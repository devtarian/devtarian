import { WIKI_GET_WIKI, WIKI_DELETE_WIKI, WIKI_FAVORITE_WIKI, WIKI_UN_FAVORITE_WIKI } from '../types';

const INIT_STATE = {
  isFetching: true,
  data: [],
};

export const wikiReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case WIKI_GET_WIKI:
      return {
        data: action.payload,
        isFetching: false,
      };
    case WIKI_DELETE_WIKI:
      return {
        ...state,
        data: state.data.filter((data) => data.id === action.payload),
      };
    case WIKI_FAVORITE_WIKI:
      return {
        ...state,
        data: state.data.map((wiki) => {
          if (wiki.id !== action.payload) return wiki;
          return {
            ...wiki,
            favorite: true,
          };
        }),
      };
    case WIKI_UN_FAVORITE_WIKI:
      return {
        ...state,
        data: state.data.map((wiki) => {
          if (wiki.id !== action.payload) return wiki;
          return {
            ...wiki,
            favorite: false,
          };
        }),
      };
    default:
      return state;
  }
};
