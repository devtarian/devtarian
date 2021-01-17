import {
  WIKI_DETAIL_GET_DETAIL,
  WIKI_DETAIL_FAVORITE_WIKI,
  WIKI_DETAIL_UN_FAVORITE_WIKI,
  WIKI_DETAIL_CREATE_COMMENT,
  WIKI_DETAIL_DELETE_COMMENT,
} from '../types';

const INIT_STATE = {
  isFetching: true,
  data: {},
};

export const wikiDetailReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case WIKI_DETAIL_GET_DETAIL:
      return {
        data: action.payload,
        isFetching: false,
      };
    case WIKI_DETAIL_FAVORITE_WIKI:
      return {
        ...state,
        data: {
          ...state.data,
          favorite: true,
        },
      };
    case WIKI_DETAIL_UN_FAVORITE_WIKI:
      return {
        ...state,
        data: {
          ...state.data,
          favorite: false,
        },
      };
    case WIKI_DETAIL_CREATE_COMMENT:
      return {
        ...state,
        data: {
          ...state.data,
          commentList: state.data.commentList.concat(action.payload),
          comments: state.data.comments + 1,
        },
      };

    default:
      return state;
  }
};
