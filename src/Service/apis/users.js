import { defaultApi } from './default';

export const api = {
  async signUp({ username, email, pw, avatar }) {
    const formdata = new FormData();
    formdata.append('username', username);
    formdata.append('email', email);
    formdata.append('pw', pw);
    formdata.append('avatar', avatar);

    console.log(defaultApi.post('/auth/signup', formdata));

    try {
      const res = await defaultApi.post('/auth/signup', formdata);
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  },
};
