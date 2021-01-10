import { STORE_GET_STORE } from '../types';

const INIT_STATE = {
  Coordinates: {
    _latitude: '',
    _longitude: '',
  },
  Store: {
    category: '',
    vegType: '',
    storeName: '',
    contactNum: '',
    address: '',
    region: '',
    operatingHours: '',
    operatingHoursMemo: '',
    menuList: '',
    contents: '',
    starRating: '',
    imgUrls: [],
  },
  Review: {
    id: 0,
    writer: '',
    createdAt: '',
    starRating: '',
    title: '',
    contents: '',
    likesOfMe: false,
    likes: 0,
    imgUrls: [],
  },
};

export const storeReducers = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case STORE_GET_STORE:
      return action.payload;

    default:
      return state;
  }
};
