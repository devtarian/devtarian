import React from 'react';
import { Link } from 'react-router-dom';
import apis from '../../Service/apis';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';

const Login = ({ user, userValues, errors, onUserValuesChange, history }) => {
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apis.authApi.login({
        email: userValues.email,
        pw: userValues.password,
      });
      localStorage.setItem('apiKey', res.data.token);
      history.push('/');
    } catch (err) {
      throw Error(err.message);
    }
  };

  return (
    <div className="wrap">
      <form className="signForm" onSubmit={handleLoginSubmit}>
        <h2>로그인</h2>
        <SignInput
          type="emai"
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
