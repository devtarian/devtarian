import axios from 'axios';

export const defaultApi = axios.create({
  baseURL: 'https://asia-northeast3-project-devtarian.cloudfunctions.net/api',
  // baseURL: 'http://localhost:5001/project-devtarian/asia-northeast3/api'
});
