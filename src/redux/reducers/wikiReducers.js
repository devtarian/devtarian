import {
  WIKI_GET_WIKI,
  WIKI_DELETE_WIKI,
  WIKI_FAVORITE_WIKI,
  WIKI_UN_FAVORITE_WIKI,
  WIKI_CREATE_WIKI,
  WIKI_EDIT_WIKI,
} from '../types';

const INIT_STATE = {
  data: [],
  totalCount: 0,
  isFetching: true,
  fetchMore: true,
  page: 0,
  size: 6,
};

export const wikiReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case WIKI_GET_WIKI:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        totalCount: action.payload.totalCount,
        isFetching: false,
        page: state.page + 1,
        fetchMore: action.payload.data.length < state.size ? false : true,
      };

    case WIKI_CREATE_WIKI:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case WIKI_EDIT_WIKI:
      return {
        ...state,
        data: state.data.map((item) => (item.id === action.payload.id ? action.payload : item)),
      };
    case WIKI_DELETE_WIKI:
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
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
