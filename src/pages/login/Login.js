import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignInput from '../SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';

const Login = ({ userValues, errors, onUserValuesChange, history }) => {
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      history.push('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Wrap>
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
          erors={errors}
          required
        />
        <SubmitBtn value="로그인">로그인</SubmitBtn>
        <div className="linkTo">
          <Link to="#">비밀번호를 잊으셨나요?</Link>
          <Link to="signup">/ 회원가입</Link>
        </div>
      </form>
      <Link to="/" className="backToMain">
        &lt; 메인으로
      </Link>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.section``;
