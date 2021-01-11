import {
  STORE_GET_STORE,
  STORE_FAVORITE_STORE,
  STORE_UN_FAVORITE_STORE,
  STORE_LIKE_REVIEW,
  STORE_UNLIKE_REVIEW,
  STORE_GET_COMMENTS,
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
    //history.push(`/detail/${storeId}`);
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const favoriteStore = (storeId) => async (dispatch) => {
  try {
    const data = await apis.storeApi.favoriteStore(storeId);

    dispatch({
      type: STORE_FAVORITE_STORE,
      payload: data,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

const unFavoriteStore = (storeId) => async (dispatch) => {
  try {
    const data = await apis.storeApi.unFavoriteStore(storeId);

    dispatch({
      type: STORE_UN_FAVORITE_STORE,
      payload: data,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

// review
const likeReview = ({ storeId, reviewId }) => async (dispatch) => {
  try {
    const data = await apis.storeApi.likeReview({ storeId, reviewId });

    dispatch({
      type: STORE_LIKE_REVIEW,
      payload: data,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

const unLikeReview = ({ storeId, reviewId }) => async (dispatch) => {
  try {
    const data = await apis.storeApi.unLikeReview({ storeId, reviewId });

    dispatch({
      type: STORE_UNLIKE_REVIEW,
      payload: data,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

// comment
const getComments = ({ storeId, reviewId, contents }) => async (dispatch) => {
  try {
    const data = await apis.storeApi.getComments({ storeId, reviewId, contents });

    dispatch({
      type: STORE_GET_COMMENTS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const storeActions = { getStore, favoriteStore, unFavoriteStore, likeReview, unLikeReview, getComments };
export default storeActions;
