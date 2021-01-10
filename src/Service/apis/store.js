import { defaultApi } from './default';

export const api = {
  async createStore(formData) {
    const res = await defaultApi.post('/store', formData);
    return res.data;
  },

  async getStore(storeId) {
    const res = await defaultApi.get(`/store/${storeId}`);
    return res.data;
  },

  async createReview({ storeId, contents }) {
    const res = await defaultApi.post(`/store/${storeId}/review`, contents);
    return res.data;
  },

  // async createComment({ userId, postId, reviewId, contents }) {
  //   return await defaultApi.post(`/user/${userId}/post/${postId}/review/${reviewId}/comment`, { contents });
  // },

  // async getComments({ userId, postId, reviewId }) {
  //   const res = await defaultApi.get(`/user/${userId}/post/${postId}/review/${reviewId}/comment`);
  //   return res.data;
  // },

  // async FavoritePost({ userId, postId }) {
  //   await defaultApi.patch(`/user/${userId}/post/${postId}/favorite`);
  // },

  // async likeReview({ userId, postId, reviewId }) {
  //   await defaultApi.patch(`/user/${userId}/post/${postId}/review/${reviewId}/like`);
  // },
};
