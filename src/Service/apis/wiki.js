import { defaultApi } from './default';
import { changeObjectToQuery } from '../../utils/helper';

export const api = {
  async getWiki(query) {
    console.log(query);
    const res = await defaultApi.get(`/wiki${changeObjectToQuery(query)}`);
    return res.data;
  },

  async createWiki(formData) {
    const res = await defaultApi.post('/wiki', formData);
    return res.data;
  },

  async getWikiDetail(wikiId) {
    const res = await defaultApi.get(`/wiki/${wikiId}`);
    return res.data;
  },

  async deleteWiki(wikiId) {
    const res = await defaultApi.delete(`/wiki/${wikiId}`);
    return res.data;
  },

  async favoriteWiki(wikiId) {
    const res = await defaultApi.post(`/wiki/${wikiId}/favorite`);
    return res.data;
  },

  async unFavoriteWiki(wikiId) {
    const res = await defaultApi.delete(`/wiki/${wikiId}/unfavorite`);
    return res.data;
  },

  async createWikiComment({ wikiId, contents }) {
    const res = await defaultApi.post(`/wiki/${wikiId}/comment`, contents);
    return res.data;
  },

  async deleteWikiComment(wikiId, commentId) {
    const res = await defaultApi.delete(`/wiki/${wikiId}/comment/${commentId}`);
    return res.data;
  },
};
