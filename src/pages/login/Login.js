import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authActions from '../../redux/actions/authActions';
import history from '../../history';
import useInput from '../../hooks/useInput';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';

const initUserValues = {
  userName: '',
  email: '',
  password: '',
  passwordCheck: '',
  avatar: '',
  files: [],
};

const Login = () => {
  const dispatch = useDispatch();
  const { inputs, setInputs, errors, onInputChange, requiredValidate } = useInput(initUserValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredList = ['email', 'password'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    dispatch(authActions.login(inputs));
    history.push('/');
    setInputs(initUserValues);
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
          name="password"
          value={inputs.password}
          onInputChange={onInputChange}
          error={errors.password}
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
