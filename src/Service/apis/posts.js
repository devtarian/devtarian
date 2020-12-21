import { defaultApi } from './default';

export const api = {
  async createPost(contents) {
    return await defaultApi.post('/post', { contents });
  },

  async getPosts() {
    const res = await defaultApi.get('/post/list');
    return res.data;
  },

  async createReview({ userId, postId, contents }) {
    return await defaultApi.post(`/user/${userId}/post/${postId}/review`, { contents });
  },

  async getReviews({ userId, postId }) {
    const res = await defaultApi.get(`/user/${userId}/post/${postId}/review/list`);
    return res.data;
  },

  async createComment({ userId, postId, reviewId, contents }) {
    return await defaultApi.post(`/user/${userId}/post/${postId}/review/${reviewId}/comment`, { contents });
  },

  async getComments({ userId, postId, reviewId }) {
    const res = await defaultApi.get(`/user/${userId}/post/${postId}/review/${reviewId}/comment`);
    return res.data;
  },

  async FavoritePost({ userId, postId }) {
    await defaultApi.patch(`/user/${userId}/post/${postId}/favorite`);
  },

  async likeReview({ userId, postId, reviewId }) {
    await defaultApi.patch(`/user/${userId}/post/${postId}/review/${reviewId}/like`);
  },
};
