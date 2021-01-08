import { AUTH_GET_ME, AUTH_LOGOUT } from '../types';
import history from '../../history';
import { defaultApi } from '../../Service/apis/default';
import apis from '../../Service/apis';

const getMe = () => async (dispatch) => {
  try {
    const data = await apis.authApi.getMe();

    dispatch({
      type: AUTH_GET_ME,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const login = (inputs) => async (dispatch) => {
  try {
    const { email, password } = inputs;
    const resToken = await apis.authApi.login({ email, pw: password });
    const token = `Bearer ${resToken.token}`;
    localStorage.setItem('token', token);
    defaultApi.defaults.headers.common['Authorization'] = token;

    dispatch(getMe());
  } catch (err) {
    console.error(err);
    console.log(err.response && err.response.data);
  }
};

const logout = () => {
  localStorage.removeItem('token');
  return { type: AUTH_LOGOUT };
};

const signup = (inputs) => async (dispatch) => {
  const { username, email, pw, thumbNailFile } = inputs;
  const formData = new FormData();
  const characterInputs = { username, email, pw };
  formData.append('file', thumbNailFile);
  formData.append('body', JSON.stringify(characterInputs));

  const resToken = await apis.authApi.signUp(formData);
  const token = `Bearer ${resToken.token}`;
  localStorage.setItem('token', token);
  defaultApi.defaults.headers.common['Authorization'] = token;
  alert('가입 되었습니다.');
  return history.push('/login');
};

const authActions = { getMe, login, logout, signup };
export default authActions;
