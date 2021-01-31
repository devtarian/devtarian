import { SEARCH_INIT_DATA, SEARCH_FAVORITE, SEARCH_UNFAVORITE } from '../types';

const INIT_STATE = {
  map: null,
  data: [],
  isFetching: true,
  fetchMore: true,
  page: 0,
  size: 4,
};

export const searchReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case SEARCH_INIT_DATA:
      return {
        ...state,
        map: action.payload.map,
        data: [...state.data, ...action.payload.data],
        isFetching: false,
        page: state.page + 1,
        fetchMore: action.payload.data.length < state.size ? false : true,
      };

    case SEARCH_FAVORITE:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              favorite: true,
            };
          } else {
            return item;
          }
        }),
      };

    case SEARCH_UNFAVORITE:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              favorite: false,
            };
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};
