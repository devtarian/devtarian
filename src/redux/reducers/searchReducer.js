import { SEARCH_INIT_DATA, SEARCH_INIT_MAP } from '../types';

const INIT_STATE = {
  isFetching: true,
  data: {
    store: [],
  },
  map: null,
};

export const searchReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case SEARCH_INIT_DATA:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
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
