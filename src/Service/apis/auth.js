import { defaultApi } from './default';

export const api = {
  async login({ email, pw }) {
    const res = await defaultApi.post('/auth/signin', { email, pw });
    const token = `Bearer ${res.data.token}`;
    localStorage.setItem('token', token);
    defaultApi.defaults.headers.common['Authorization'] = token;
    return res;
  },

  async getMe() {
    const res = await defaultApi.get('/auth/me');
    return res.data;
  },
};
