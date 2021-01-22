import { changeObjectToQuery } from '../../utils/helper';
import { defaultApi } from './default';

export const api = {
  async getSearch(query) {
    const res = await defaultApi.get(`/search${changeObjectToQuery(query)}`);
    return res.data;
  },
};
