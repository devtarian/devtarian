import axios from 'axios';

export const defaultApi = axios.create({
  baseURL: 'https://asia-northeast3-project-devtarian.cloudfunctions.net/api',
});
