import {
  STORE_GET_STORE,
  STORE_FAVORITE_STORE,
  STORE_UN_FAVORITE_STORE,
  STORE_REVIEW_LIKE,
  STORE_REVIEW_UNLIKE,
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
    case STORE_REVIEW_LIKE:
      return {
        ...state,
        data: {
          ...state.data,
          reviewList: state.data.reviewList.map((review) => {
            if (review.id !== action.payload) return review;

            return {
              ...review,
              likesOfMe: true,
              likes: review.likes + 1,
            };
          }),
        },
      };
    case STORE_REVIEW_UNLIKE:
      return {
        ...state,
        data: {
          ...state.data,
          reviewList: state.data.reviewList.map((review) => {
            if (review.id !== action.payload) return review;

            return {
              ...review,
              likesOfMe: false,
              likes: review.likes - 1,
            };
          }),
        },
      };

    default:
      return state;
  }
};
