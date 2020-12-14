import axios from 'axios';

export const defaultApi = axios.create({
  baseURL: 'https://devtarian.herokuapp.com',
});
