import {
  WIKI_DETAIL_GET_DETAIL,
  WIKI_DETAIL_FAVORITE_WIKI,
  WIKI_DETAIL_UN_FAVORITE_WIKI,
  WIKI_DETAIL_DELETE_COMMENT,
} from '../types';
import apis from '../../Service/apis';

const getWikiDetail = (wikiId) => async (dispatch) => {
  try {
    const data = await apis.wikiApi.getWikiDetail(wikiId);
    console.log('wikiDetailActions', data);
    dispatch({
      type: WIKI_DETAIL_GET_DETAIL,
      payload: data,
    });
  } catch (err) {
    console.log(err.response && err.response.data);
  }
};

const favoriteWiki = (wikiId) => async (dispatch) => {
  try {
    await apis.wikiApi.favoriteWiki(wikiId);

    dispatch({
      type: WIKI_DETAIL_FAVORITE_WIKI,
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
      type: WIKI_DETAIL_UN_FAVORITE_WIKI,
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
      type: WIKI_DETAIL_DELETE_COMMENT,
      payload: commentId,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const wikiDetailActions = { getWikiDetail, favoriteWiki, unFavoriteWiki, deleteWikiComment };
export default wikiDetailActions;
