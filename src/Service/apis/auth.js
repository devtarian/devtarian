import { defaultApi } from './default';

export const api = {
  async login({ email, pw }) {
    try {
      const res = await defaultApi.post('/auth/signin', {
        email,
        pw,
      });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
