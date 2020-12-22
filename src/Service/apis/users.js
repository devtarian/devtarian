import { defaultApi } from './default';

export const api = {
  async signUp({ username, email, pw, avatar }) {
    const formData = new FormData();
    const file = avatar;
    const characterInputs = { username, email, pw };
    formData.append('file', file);
    formData.append('body', JSON.stringify(characterInputs));

    const res = await defaultApi.post('/auth/signup', formData);
    console.log(res);
    return res.data;
  },
};
