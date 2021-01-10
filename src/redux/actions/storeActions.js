import { STORE_GET_STORE } from '../types';
import apis from '../../Service/apis';

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

const storeActions = { getStore };
export default storeActions;
