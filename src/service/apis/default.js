import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export const defaultApi = axios.create({
  baseURL: 'https://asia-northeast3-project-devtarian.cloudfunctions.net/api',
  //baseURL: 'http://localhost:5001/project-devtarian/asia-northeast3/api',
});

defaultApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403 && error.response) {
      if (error.response.data.code === 'auth/id-token-expired' || error.response.data.code === 'auth/argument-error') {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = '';
      }
    }

    return Promise.reject(error);
  }
);
