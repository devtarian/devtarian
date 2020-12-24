import { defaultApi } from './default';

export const api = {
  async signUp({ username, email, pw, thumbNailFile }) {
    const formData = new FormData();
    const characterInputs = { username, email, pw };
    formData.append('file', thumbNailFile);
    formData.append('body', JSON.stringify(characterInputs));

    const res = await defaultApi.post('/auth/signup', formData);
    console.log(res);
    return res.data;
  },
};
