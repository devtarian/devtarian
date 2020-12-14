import { defaultApi } from './default';

export const api = {
  async login({ email, pw }) {
    console.log(
      defaultApi.post('/auth/signin', {
        email,
        pw,
      })
    );

    try {
      const res = await defaultApi.post('/auth/signin', {
        email,
        pw,
      });
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  },
};
