import { saveLocalStorageData, loadLocalStorageData } from './storage';

const KEY = 'recentKeywords';

export const loadRecentKeywords = () => {
  const recentKeywords = loadLocalStorageData(KEY);
  return recentKeywords;
};

export const saveRecentKeywords = (keyword) => {
  const newKeyword = saveLocalStorageData(KEY, keyword);
  return newKeyword;
};
