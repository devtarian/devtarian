import { defaultApi } from './default';

export const api = {
  // store
  async createStore(formData) {
    const res = await defaultApi.post('/store', formData);
    return res.data;
  },

  async getStore(storeId) {
    const res = await defaultApi.get(`/store/${storeId}`);
    return res.data;
  },

  async favoriteStore(storeId) {
    await defaultApi.post(`/store/${storeId}/favorite`);
  },

  async unFavoriteStore(storeId) {
    await defaultApi.delete(`/store/${storeId}/unfavorite`);
  },

  // review
  async createReview(storeId, formData) {
    const res = await defaultApi.post(`/store/${storeId}/review`, formData);
    return res.data;
  },

  async likeReview(storeId, reviewId) {
    await defaultApi.post(`/store/${storeId}/review/${reviewId}/like`);
  },

  async unLikeReview(storeId, reviewId) {
    await defaultApi.delete(`/store/${storeId}/review/${reviewId}/unlike`);
  },

  // comment
  async createComment({ storeId, reviewId, data }) {
    return await defaultApi.post(`/store/${storeId}/review/${reviewId}/comment`, data);
  },

  async getComments(storeId, reviewId) {
    const res = await defaultApi.get(`/store/${storeId}/review/${reviewId}/comment`);
    return res.data;
  },

  async deleteComment({ storeId, reviewId, commentId }) {
    // commentId 맞게 넘어옴
    console.log({ storeId, reviewId, commentId });
    return await defaultApi.delete(`/store/${storeId}/review/${reviewId}/comment/${commentId}`);
  },
};
