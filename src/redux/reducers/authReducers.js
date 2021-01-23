import { AUTH_GET_ME, AUTH_LOGIN, AUTH_LOGOUT } from '../types';

const INIT_AUTH = {
  isLoggedIn: false,
  isFetched: false,
  createdAt: '',
  userId: '',
  email: '',
  thumbNail: '',
  username: '',
};

export const authReducers = (state = INIT_AUTH, action = {}) => {
  switch (action.type) {
    case AUTH_GET_ME:
      return {
        ...action.payload,
        isLoggedIn: true,
        isFetched: true,
      };

    case AUTH_LOGIN:
      console.log(action.payload);
      return {
        ...action.payload,
        isLoggedIn: true,
        isFetched: true,
      };
    case AUTH_LOGOUT:
      return INIT_AUTH;

    default:
      return state;
  }
};
