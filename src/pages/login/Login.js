import React from 'react';
import { Link } from 'react-router-dom';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';

const Login = ({ user, userValues, errors, onUserValuesChange, onLoginSubmit }) => {
  return (
    <div className="wrap">
      <form className="signForm" onSubmit={onLoginSubmit}>
        <h2>로그인</h2>
        <SignInput
          type="email"
          placeholder="이메일"
          name="email"
          value={userValues.email}
          onUserValuesChange={onUserValuesChange}
          errors={errors}
          required
        />
        <SignInput
          type="password"
          placeholder="비밀번호"
          name="password"
          value={userValues.password}
          onUserValuesChange={onUserValuesChange}
          errors={errors}
          required
        />
        <SubmitBtn value="로그인">로그인</SubmitBtn>
        <div className="linkTo">
          <Link to="#">비밀번호를 잊으셨나요?</Link>
          <Link to="/signup">/ 회원가입</Link>
        </div>
      </form>
      <Link to="/" className="backToMain">
        &lt; 메인으로
      </Link>
    </div>
  );
};

export default Login;
