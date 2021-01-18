import { MAIN_GET_MAIN, MAIN_LIKE_REVIEW, MAIN_UNLIKE_REVIEW } from '../types';
import apis from '../../Service/apis';

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

const mainActions = { getMain };
export default mainActions;
