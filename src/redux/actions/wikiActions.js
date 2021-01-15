import {
  WIKI_GET_WIKI,
  WIKI_GET_DETAIL,
  WIKI_DELETE_WIKI,
  WIKI_FAVORITE_WIKI,
  WIKI_UN_FAVORITE_WIKI,
  WIKI_DELETE_COMMENT,
} from '../types';
import apis from '../../Service/apis';

// wiki
const getWiki = () => async (dispatch) => {
  try {
    const data = await apis.wikiApi.getWiki();

    dispatch({
      type: WIKI_GET_WIKI,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const getWikiDetail = (wikiId) => async (dispatch) => {
  try {
    const data = await apis.wikiApi.getWikiDetail();

    dispatch({
      type: WIKI_GET_DETAIL,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const deleteWiki = (wikiId) => async (dispatch) => {
  try {
    await apis.wikiApi.deleteWiki();

    dispatch({
      type: WIKI_DELETE_WIKI,
      payload: wikiId,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const favoriteWiki = (wikiId) => async (dispatch) => {
  try {
    await apis.wikiApi.favoriteWiki(wikiId);

    dispatch({
      type: WIKI_FAVORITE_WIKI,
      payload: wikiId,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

const unFavoriteWiki = (wikiId) => async (dispatch) => {
  try {
    await apis.wikiApi.unFavoriteWiki(wikiId);

    dispatch({
      type: WIKI_UN_FAVORITE_WIKI,
      payload: wikiId,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

// comment
const deleteWikiComment = (wikiId, commentId) => async (dispatch) => {
  try {
    await apis.wikiApi.deleteWikiComment(wikiId, commentId);

    dispatch({
      type: WIKI_DELETE_COMMENT,
      payload: commentId,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const wikiActions = { getWiki, getWikiDetail, deleteWiki, favoriteWiki, unFavoriteWiki, deleteWikiComment };
export default wikiActions;
