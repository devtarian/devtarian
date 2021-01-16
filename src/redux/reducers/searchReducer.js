import { SEARCH_INIT } from '../types';

const INIT_STATE = {
  isFetching: true,
  data: {},
};

export const searchReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case SEARCH_INIT:
      return {
        data: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
