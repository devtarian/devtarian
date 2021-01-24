import {
  MAIN_GET_MAIN,
  MAIN_STORE_FAVORITE,
  MAIN_STORE_UNFAVORITE,
  MAIN_WIKI_FAVORITE,
  MAIN_WIKI_UNFAVORITE,
  MAIN_REVIEW_LIKE,
  MAIN_REVIEW_UNLIKE,
  MAIN_FETCH_MORE,
} from '../types';

const INIT_STATE = {
  isFetching: true,
  // data: {},
  store: { data: [], page: 1, size: 1, fetchMore: true },
  rated: { data: [], page: 1, size: 1, fetchMore: true },
  wiki: { data: [], page: 1, size: 1, fetchMore: true },
  review: { data: [], page: 1, size: 1, fetchMore: true },
};

export const mainReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case MAIN_GET_MAIN:
      return {
        ...state,
        isFetching: false,
        store: {
          ...state.store,
          data: action.payload.store,
        },
        rated: {
          ...state.rated,
          data: action.payload.rated,
        },
        wiki: {
          ...state.wiki,
          data: action.payload.wiki,
        },
        review: {
          ...state.review,
          data: action.payload.review,
        },
      };

    case MAIN_FETCH_MORE:
      const type = action.payload.type;
      return {
        ...state,
        [type]: {
          ...state[type],
          data: [...state[type].data, ...action.payload.data],
          page: state[type].page + 1,
          fetchMore: action.payload.data.length < state[type].size ? false : true,
        },
      };

    case MAIN_STORE_FAVORITE:
      return {
        ...state,
        store: {
          ...state.store,
          data: state.store.data.map((item) => {
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

        rated: {
          ...state.rated,
          data: state.rated.data.map((item) => {
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
        store: {
          ...state.store,
          data: state.store.data.map((item) => {
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
        rated: {
          ...state.rated,
          data: state.rated.data.map((item) => {
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
        wiki: {
          ...state.wiki,
          data: state.wiki.data.map((item) => {
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
        wiki: {
          ...state.wiki,
          data: state.wiki.data.map((item) => {
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
        review: {
          ...state.review,
          data: state.review.data.map((item) => {
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
        review: {
          ...state.review,
          data: state.review.data.map((item) => {
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
