import {
  STORE_GET_STORE,
  STORE_FAVORITE_STORE,
  STORE_UN_FAVORITE_STORE,
  STORE_LIKE_REVIEW,
  STORE_UNLIKE_REVIEW,
  STORE_GET_COMMENTS,
} from '../types';

const INIT_STATE = {
  isFetching: true,
  data: {},
};

export const storeReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case STORE_GET_STORE:
      return {
        data: action.payload,
        isFetching: false,
      };
    case STORE_FAVORITE_STORE:
      return {
        ...state,
        data: {
          ...state.data,
          favorite: true,
        },
      };
    case STORE_UN_FAVORITE_STORE:
      return {
        ...state,
        data: {
          ...state.data,
          favorite: false,
        },
      };
    case STORE_LIKE_REVIEW:
      return {
        ...state,
        data: {
          ...state.data,
          reviewList: {
            ...state.data.reviewList,
            likesOfMe: true,
            likes: state.data.reviewList.likes + 1,
          },
        },
      };
    case STORE_UNLIKE_REVIEW:
      return {
        ...state,
        data: {
          ...state.data,
          reviewList: {
            ...state.data.reviewList,
            likesOfMe: false,
            likes: state.data.reviewList.likes - 1,
          },
        },
      };
    case STORE_GET_COMMENTS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
