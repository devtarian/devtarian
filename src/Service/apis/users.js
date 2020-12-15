import { defaultApi } from './default';

export const api = {
  async signUp({ username, email, pw, avatar }) {
    const formData = new FormData();
    const file = avatar;
    const characterInputs = { username, email, pw };
    formData.append('file', file);
    formData.append('characterInputs', characterInputs);

    // formData.append('username', username);
    // formData.append('email', email);
    // formData.append('pw', pw);
    // formData.append('avatar', avatar);

    console.log(defaultApi.post('/auth/signup', characterInputs));

    try {
      const res = await defaultApi.post('/auth/signup', characterInputs);
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  },
};
