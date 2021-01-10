import { defaultApi } from './default';

export const api = {
  async login({ email, pw }) {
    const res = await defaultApi.post('/auth/signin', { email, pw });
    return res.data;
  },

  async signUp(formData) {
    const res = await defaultApi.post('/auth/signup', formData);
    return res.data;
  },

  async getMe() {
    const res = await defaultApi.get('/auth/me');
    return res.data;
  },
};
