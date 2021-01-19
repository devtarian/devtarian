import {
  STORE_GET_STORE,
  STORE_FAVORITE_STORE,
  STORE_UN_FAVORITE_STORE,
  STORE_REVIEW_LIKE,
  STORE_REVIEW_UNLIKE,
} from '../types';
import apis from '../../Service/apis';

// store
const getStore = (storeId) => async (dispatch) => {
  try {
    const data = await apis.storeApi.getStore(storeId);

    dispatch({
      type: STORE_GET_STORE,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const favoriteStore = (storeId) => async (dispatch) => {
  try {
    await apis.storeApi.favoriteStore(storeId);

    dispatch({
      type: STORE_FAVORITE_STORE,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

const unFavoriteStore = (storeId) => async (dispatch) => {
  try {
    await apis.storeApi.unFavoriteStore(storeId);

    dispatch({
      type: STORE_UN_FAVORITE_STORE,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

// review
const likeReview = (storeId, reviewId) => async (dispatch) => {
  try {
    await apis.storeApi.likeReview(storeId, reviewId);

    dispatch({
      type: STORE_REVIEW_LIKE,
      payload: reviewId,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

const unLikeReview = (storeId, reviewId) => async (dispatch) => {
  try {
    await apis.storeApi.unLikeReview(storeId, reviewId);

    dispatch({
      type: STORE_REVIEW_UNLIKE,
      payload: reviewId,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

const storeActions = { getStore, favoriteStore, unFavoriteStore, likeReview, unLikeReview };
export default storeActions;
