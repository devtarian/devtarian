import React from 'react';
import { Link } from 'react-router-dom';
import UploadProfileImg from './UploadProfileImg';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';

const SignUp = ({ userValues, errors, onProfileUpload, onUserValuesChange, onSignUpSubmit }) => {
  return (
    <div className="wrap">
      <form className="signForm" onSubmit={onSignUpSubmit}>
        <h2>회원가입</h2>
        <UploadProfileImg
          userValues={userValues}
          onProfileUpload={onProfileUpload}
          onUserValuesChange={onUserValuesChange}
        />
        <SignInput
          type="text"
          placeholder="이름"
          name="userName"
          value={userValues.userName}
          onUserValuesChange={onUserValuesChange}
          errors={errors}
          required
        />
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
        <SignInput
          type="password"
          placeholder="비밀번호 확인"
          name="passwordCheck"
          value={userValues.passwordCheck}
          onUserValuesChange={onUserValuesChange}
          errors={errors}
          required
        />
        <SubmitBtn value="회원가입">회원가입</SubmitBtn>
        <div className="linkTo">
          <Link to="/login">계정이 있으신가요? 로그인</Link>
        </div>
      </form>
      <Link to="/" className="backToMain">
        &lt; 메인으로
      </Link>
    </div>
  );
};

export default SignUp;
