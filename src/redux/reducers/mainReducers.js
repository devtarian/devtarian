import {
  MAIN_GET_MAIN,
  MAIN_STORE_FAVORITE,
  MAIN_STORE_UNFAVORITE,
  MAIN_WIKI_FAVORITE,
  MAIN_WIKI_UNFAVORITE,
  MAIN_REVIEW_LIKE,
  MAIN_REVIEW_UNLIKE,
} from '../types';

const INIT_STATE = {
  isFetching: true,
  data: {},
};

export const mainReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case MAIN_GET_MAIN:
      return {
        data: action.payload,
        isFetching: false,
      };

    case MAIN_STORE_FAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          store: state.data.store.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                favorite: true,
              };
            } else {
              return item;
            }
          }),
          rated: state.data.rated.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                favorite: true,
              };
            } else {
              return item;
            }
          }),
        },
      };

    case MAIN_STORE_UNFAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          store: state.data.store.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                favorite: false,
              };
            } else {
              return item;
            }
          }),
          rated: state.data.rated.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                favorite: false,
              };
            } else {
              return item;
            }
          }),
        },
      };

    case MAIN_WIKI_FAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          wiki: state.data.wiki.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                favorite: true,
              };
            } else {
              return item;
            }
          }),
        },
      };

    case MAIN_WIKI_UNFAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          wiki: state.data.wiki.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                favorite: false,
              };
            } else {
              return item;
            }
          }),
        },
      };

    case MAIN_REVIEW_LIKE:
      return {
        ...state,
        data: {
          ...state.data,
          review: state.data.review.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                likesOfMe: true,
              };
            } else {
              return item;
            }
          }),
        },
      };

    case MAIN_REVIEW_UNLIKE:
      return {
        ...state,
        data: {
          ...state.data,
          review: state.data.review.map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                likesOfMe: false,
              };
            } else {
              return item;
            }
          }),
        },
      };

    default:
      return state;
  }
};
