import { defaultApi } from './default';

export const api = {
  async getMain({ lat, lng }) {
    const res = await defaultApi.get(`/main?lat=${lat}&lng=${lng}`);
    return res.data;
  },
};
