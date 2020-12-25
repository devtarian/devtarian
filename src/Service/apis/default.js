import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export const defaultApi = axios.create({
  // baseURL: 'https://asia-northeast3-project-devtarian.cloudfunctions.net/api',
  baseURL: 'http://localhost:5001/project-devtarian/asia-northeast3/api',
});
