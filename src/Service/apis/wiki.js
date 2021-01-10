import { defaultApi } from './default';

export const api = {
  async getWiki() {
    const res = await defaultApi.get('/wiki');
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

  async favoriteWiki(wikiId) {
    const res = await defaultApi.post(`/wiki/${wikiId}/favorite`, {});
    return res.data;
  },

  async unfavoriteWiki(wikiId) {
    const res = await defaultApi.delete(`/wiki/${wikiId}/unfavorite`, {});
    return res.data;
  },

  async createWikiComment(wikiId) {
    const res = await defaultApi.post(`/wiki/${wikiId}/comment`, {});
    return res.data;
  },

  async likeWikiComment(wikiId, commentId) {
    const res = await defaultApi.post(`/wiki/${wikiId}/comment/${commentId}/like`, {});
    return res.data;
  },

  async unLikeWikiComment(wikiId, commentId) {
    const res = await defaultApi.delete(`/wiki/${wikiId}/comment/${commentId}/unlike`, {});
    return res.data;
  },
};
