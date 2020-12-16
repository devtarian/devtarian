import { defaultApi } from './default';

export const api = {
  async login({ email, pw }) {
    const res = await defaultApi.post('/auth/signin', {
      email,
      pw,
    });
    return res;
  },
};
