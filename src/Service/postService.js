import { loadLocalStorageData, saveLocalStorageData } from './storage';

const KEY = 'Auth';

export const loadPosts = () => {
  const posts = loadLocalStorageData(KEY);
  return posts;
};

export const savePosts = (posts) => {
  const newPosts = saveLocalStorageData(KEY, posts);
  return newPosts;
};
