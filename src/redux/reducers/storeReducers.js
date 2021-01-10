import { STORE_GET_STORE } from '../types';

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

    default:
      return state;
  }
};
