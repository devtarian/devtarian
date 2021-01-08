import { AUTH_GET_ME, AUTH_LOGOUT } from '../types';

const INIT_STATE = {
  createdAt: '',
  userId: '',
  email: '',
  thumbNail: '',
  username: '',
};

export const authReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case AUTH_GET_ME:
      return action.payload;

    case AUTH_LOGOUT:
      return INIT_STATE;

    default:
      return state;
  }
};
