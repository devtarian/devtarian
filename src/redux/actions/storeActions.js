import { STORE_GET_STORE } from '../types';
import history from '../../history';
import { defaultApi } from '../../Service/apis/default';
import apis from '../../Service/apis';

const createStore = async (inputs) => {
  console.log('createStore', inputs);
  try {
    const {
      id,
      step,
      vegType,
      starRating,
      storeName,
      region,
      address,
      contactNum,
      operatingHours,
      operatingHoursMemo,
      menuList,
      files,
    } = inputs;
    const formData = new FormData();
    const characterInputs = {
      id,
      step,
      vegType,
      starRating,
      storeName,
      region,
      address,
      contactNum,
      operatingHours,
      operatingHoursMemo,
      menuList,
    };
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
    formData.append('body', JSON.stringify(characterInputs));

    const resToken = await apis.storeApi.createStore(formData);
    const token = `Bearer ${resToken.token}`;
    //localStorage.setItem('token', token);
    defaultApi.defaults.headers.common['Authorization'] = token;

    return history.push('/');
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

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

const createReview = async (inputs) => {
  try {
    const { id, starRating, title, contents, files } = inputs;
    const formData = new FormData();
    const characterInputs = {
      id,
      starRating,
      title,
      contents,
    };
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
    formData.append('body', JSON.stringify(characterInputs));

    const resToken = await apis.storeApi.createReview(id, formData);
    const token = `Bearer ${resToken.token}`;
    //localStorage.setItem('token', token);
    defaultApi.defaults.headers.common['Authorization'] = token;

    return history.push('/');
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const storeActions = { createStore, getStore, createReview };
export default storeActions;
