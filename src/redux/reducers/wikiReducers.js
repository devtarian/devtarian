import {
  WIKI_GET_WIKI,
  WIKI_GET_DETAIL,
  WIKI_DELETE_WIKI,
  WIKI_FAVORITE_WIKI,
  WIKI_UN_FAVORITE_WIKI,
  WIKI_DELETE_COMMENT,
} from '../types';

const INIT_STATE = {
  isFetching: true,
  data: {},
};

export const wikiReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case WIKI_GET_WIKI:
      return {
        data: action.payload,
        isFetching: false,
      };
    case WIKI_GET_DETAIL:
      return {
        ...state,
        data: action.payload,
      };
    case WIKI_DELETE_WIKI:
      return {
        ...state,
        data: state.data.filter((data) => data.id === action.payload),
      };
    case WIKI_FAVORITE_WIKI:
      return {
        ...state,
        data: {
          ...state.data,
          favorite: true,
        },
      };
    case WIKI_UN_FAVORITE_WIKI:
      return {
        ...state,
        data: {
          ...state.data,
          favorite: false,
        },
      };
    case WIKI_DELETE_COMMENT:
      return {
        ...state,
        data: {
          ...state.data,
          commentList: state.data.commentList.filter((comment) => comment.id === action.payload),
          comments: state.data.comments - 1,
        },
      };
    default:
      return state;
  }
};
