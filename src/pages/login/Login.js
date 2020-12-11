import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubmitBtn from '../../components/form/SubmitBtn';

const Login = () => {
  return (
    <Wrap>
      <form className="signForm">
        <h2>로그인</h2>
        <div>
          <label>이메일</label>
          <input placeholder="이메일"></input>
        </div>
        <div>
          <label>비밀번호</label>
          <input placeholder="비밀번호"></input>
        </div>
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
