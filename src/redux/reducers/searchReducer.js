import { SEARCH_INIT_DATA, SEARCH_INIT_MAP } from '../types';

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
        data: [...state.data, ...action.payload],
        isFetching: false,
        page: state.page + 1,
        fetchMore: action.payload.length < state.size ? false : true,
      };

    case SEARCH_INIT_MAP:
      return {
        ...state,
        map: action.payload,
      };

    default:
      return state;
  }
};
