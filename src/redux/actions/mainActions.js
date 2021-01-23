import {
  MAIN_GET_MAIN,
  MAIN_STORE_FAVORITE,
  MAIN_STORE_UNFAVORITE,
  MAIN_WIKI_FAVORITE,
  MAIN_WIKI_UNFAVORITE,
  MAIN_REVIEW_LIKE,
  MAIN_REVIEW_UNLIKE,
  MAIN_FETCH_MORE,
} from '../types';
import apis from '../../service/apis';

const getMain = ({ lat, lng }) => async (dispatch) => {
  try {
    const data = await apis.mainApi.getMain({ lat: lat || 37.573, lng: lng || 126.9794 });

    dispatch({
      type: MAIN_GET_MAIN,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const fetchMore = (query) => async (dispatch, getState) => {
  try {
    const page = getState().main[query.type].page;
    const data = await apis.mainApi.fetchMore({ ...query, page: page + 1 });

    dispatch({
      type: MAIN_FETCH_MORE,
      payload: { type: query.type, data },
    });
  } catch (err) {
    console.log(err);
    console.log(err.response ? err.response : err);
  }
};

const favorite = (storeId) => async (dispatch) => {
  try {
    await apis.storeApi.favoriteStore(storeId);
    dispatch({
      type: MAIN_STORE_FAVORITE,
      payload: storeId,
    });
  } catch (err) {
    console.log(err);
    console.log(err.response);
  }
};

const unFavorite = (storeId) => async (dispatch) => {
  try {
    await apis.storeApi.unFavoriteStore(storeId);
    dispatch({
      type: MAIN_STORE_UNFAVORITE,
      payload: storeId,
    });
  } catch (err) {
    console.log(err.response);
  }
};

const favoriteWiki = (wikiId) => async (dispatch) => {
  try {
    await apis.wikiApi.favoriteWiki(wikiId);
    dispatch({
      type: MAIN_WIKI_FAVORITE,
      payload: wikiId,
    });
  } catch (err) {
    console.log(err.response);
  }
};

const unFavoriteWiki = (wikiId) => async (dispatch) => {
  try {
    await apis.wikiApi.unFavoriteWiki(wikiId);
    dispatch({
      type: MAIN_WIKI_UNFAVORITE,
      payload: wikiId,
    });
  } catch (err) {
    console.log(err.response);
  }
};

const likeReview = (storeId, reviewId) => async (dispatch) => {
  try {
    await apis.storeApi.likeReview(storeId, reviewId);
    dispatch({
      type: MAIN_REVIEW_LIKE,
      payload: reviewId,
    });
  } catch (err) {
    console.log(err.response);
  }
};

const unLikeReview = (storeId, reviewId) => async (dispatch) => {
  try {
    await apis.storeApi.unLikeReview(storeId, reviewId);
    dispatch({
      type: MAIN_REVIEW_UNLIKE,
      payload: reviewId,
    });
  } catch (err) {
    console.log(err.response);
  }
};

const mainActions = {
  getMain,
  fetchMore,
  favorite,
  unFavorite,
  favoriteWiki,
  unFavoriteWiki,
  likeReview,
  unLikeReview,
};
export default mainActions;
