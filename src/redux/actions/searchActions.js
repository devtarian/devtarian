import { SEARCH_INIT_DATA, SEARCH_FAVORITE, SEARCH_UNFAVORITE } from '../types';
import queryString from 'query-string';
import history from '../../history';
import apis from '../../service/apis';
import { initMap, makeMarkerImg, makeMarker, makeInfoWindow, drawMap } from '../../utils/mapFunctions';

const getSeach = (mapElem) => async (dispatch, getState) => {
  try {
    let page = getState().search.page;
    let query = queryString.parse(history.location.search);
    let data = await apis.searchApi.getSearch({ ...query, page: page + 1 });

    let map = mapElem ? initMap(mapElem, query) : getState().search.map;

    let result = [];
    result = data.map((store) => {
      let { _latitude, _longitude } = store.coordinates;
      let { imageNormal, imageOver } = makeMarkerImg(store.info.category);
      let point = new window.kakao.maps.LatLng(_latitude, _longitude);
      let marker = makeMarker(point, imageNormal);
      let infoWindow = makeInfoWindow(store);
      let mapData = { point, marker, imageNormal, imageOver, infoWindow };

      drawMap(map, mapData);

      return { ...store, mapData };
    });
    dispatch({
      type: SEARCH_INIT_DATA,
      payload: { data: result, map },
    });
  } catch (err) {
    console.log(err);
    console.log(err.response);
  }
};

const favorite = (storeId) => async (dispatch) => {
  try {
    await apis.storeApi.favoriteStore(storeId);
    dispatch({
      type: SEARCH_FAVORITE,
      payload: storeId,
    });
  } catch (err) {
    console.log(err.response);
  }
};

const unFavorite = (storeId) => async (dispatch) => {
  try {
    await apis.storeApi.unFavoriteStore(storeId);
    dispatch({
      type: SEARCH_UNFAVORITE,
      payload: storeId,
    });
  } catch (err) {
    console.log(err.response);
  }
};

const mainActions = { getSeach, favorite, unFavorite };
export default mainActions;
