import { SEARCH_INIT_DATA, SEARCH_INIT_MAP, SEARCH_FAVORITE, SEARCH_UNFAVORITE } from '../types';
import queryString from 'query-string';
import history from '../../history';
import apis from '../../Service/apis';
import { makeMarkerImg, makeMarker, makeInfoWindow, drawMap } from '../../utils/mapFunctions';

const getSearch = () => async (dispatch, getState) => {
  try {
    let { page, map } = getState().search;
    let query = queryString.parse(history.location.search);
    let data = await apis.searchApi.getSearch({ ...query, page: page + 1 });
    let result = [];
    result = data.map((store) => {
      const { _latitude, _longitude } = store.coordinates;
      const { imageNormal, imageOver } = makeMarkerImg(store.info.category);
      const point = new window.kakao.maps.LatLng(_latitude, _longitude);
      const marker = makeMarker(point, imageNormal);

      if (map) {
        marker.setMap(map);
      }
      return {
        ...store,
        map: {
          point,
          marker,
          imageNormal,
          imageOver,
          infoWindow: makeInfoWindow(store),
        },
      };
    });
    console.log(result);
    dispatch({
      type: SEARCH_INIT_DATA,
      payload: result,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const initMap = (mapElem) => async (dispatch, getState) => {
  try {
    const data = getState().search.data;
    const { lat, lng } = queryString.parse(history.location.search);

    const center = new window.kakao.maps.LatLng(lat || 37.573, lng || 126.9794);
    const mapOption = { center, level: 6 };
    const map = new window.kakao.maps.Map(mapElem, mapOption);
    const marker = new window.kakao.maps.Marker({ map, position: center });
    marker.setMap(map);
    drawMap(map, data);

    dispatch({ type: SEARCH_INIT_MAP, payload: map });
  } catch (err) {
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

const mainActions = { getSearch, initMap, favorite, unFavorite };
export default mainActions;
