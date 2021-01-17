import { SEARCH_INIT_DATA, SEARCH_INIT_MAP } from '../types';
import queryString from 'query-string';
import history from '../../history';
import apis from '../../Service/apis';
import { makeMarkerImg, makeMarker, makeInfoWindow, drawMap } from '../../utils/mapFunctions';

const getSearch = () => async (dispatch) => {
  try {
    const query = queryString.parse(history.location.search);
    const data = await apis.searchApi.getSearch(query);

    data.store = data.store.map((store) => {
      const { _latitude, _longitude } = store.coordinates;
      const { imageNormal, imageOver } = makeMarkerImg(store.info.category);
      const marker = makeMarker(_latitude, _longitude, imageNormal);
      return {
        ...store,
        map: {
          marker,
          imageNormal,
          imageOver,
          infoWindow: makeInfoWindow(store),
        },
      };
    });

    dispatch({
      type: SEARCH_INIT_DATA,
      payload: data,
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

    const center = new window.kakao.maps.LatLng(lat, lng);
    const mapOption = { center, level: 5 };
    const map = new window.kakao.maps.Map(mapElem, mapOption);
    const marker = new window.kakao.maps.Marker({ map, position: center });
    marker.setMap(map);
    drawMap(map, data);

    dispatch({ type: SEARCH_INIT_MAP, payload: map });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const mainActions = { getSearch, initMap };
export default mainActions;
