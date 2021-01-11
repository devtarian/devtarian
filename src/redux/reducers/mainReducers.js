import { MAIN_GET_MAIN } from '../types';

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

    default:
      return state;
  }
};
