import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/actions';
import history from '../../history';
import useInput from '../../hooks/useInput';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';

const INIT_USER_VALUES = {
  username: '',
  email: '',
  pw: '',
  pwCheck: '',
  avatar: '',
  files: [],
};

const Login = () => {
  const dispatch = useDispatch();
  const { inputs, setInputs, errors, setErrors, onInputChange, requiredValidate } = useInput(INIT_USER_VALUES);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredList = ['email', 'pw'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;
    const error = await dispatch(authActions.login(inputs));
    setInputs(INIT_USER_VALUES);

    if (error && Object.keys(error).length) {
      console.log(error);
      setErrors({
        ...error,
      });
    }
  };
  return (
    <div className="wrap">
      <form className="signForm" onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <SignInput
          type="email"
          placeholder="이메일"
          name="email"
          value={inputs.email}
          onInputChange={onInputChange}
          error={errors.email}
          required
        />
        <SignInput
          type="password"
          placeholder="비밀번호"
          name="pw"
          value={inputs.pw}
          onInputChange={onInputChange}
          error={errors.pw}
          required
        />
        <SubmitBtn value="로그인">로그인</SubmitBtn>
        <div className="linkTo">
          <Link to="#">비밀번호를 잊으셨나요?</Link>
          <Link to="/signup">/ 회원가입</Link>
        </div>
      </form>
      <GoBackLink to="/" innerText="메인으로" />
    </div>
  );
};

export default Login;
