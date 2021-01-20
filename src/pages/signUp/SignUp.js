import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import apis from '../../service/apis';
import { defaultApi } from '../../service/apis/default';

import useInput from '../../hooks/useInput';
import UploadProfileImg from './UploadProfileImg';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';
import history from '../../history';

const INIT_USER_VALUES = {
  username: '',
  email: '',
  pw: '',
  pwCheck: '',
  files: [],
};

const SignUp = () => {
  const { inputs, setInputs, errors, setErrors, onImageUpload, onInputChange, requiredValidate } = useInput(
    INIT_USER_VALUES
  );

  useEffect(() => {
    return () => setInputs(INIT_USER_VALUES);
  }, [setInputs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredList = ['username', 'email', 'pw', 'pwCheck'];
    let isValid = requiredValidate(requiredList);

    if (!isValid) return;
    console.log(inputs);
    try {
      const { username, email, pw, files } = inputs;
      const formData = new FormData();
      const body = { username, email, pw };

      files.forEach((file) => formData.append('file', file));
      formData.append('body', JSON.stringify(body));

      const resToken = await apis.authApi.signUp(formData);
      const token = `Bearer ${resToken.token}`;
      localStorage.setItem('token', token);
      defaultApi.defaults.headers.common['Authorization'] = token;

      alert('가입 되었습니다.');
      setInputs(INIT_USER_VALUES);
      history.push('/');
    } catch (err) {
      console.error(err.response ? err.response : err);
      setErrors(err.response?.data);
    }
  };

  return (
    <div className="wrap">
      <form className="signForm" onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <UploadProfileImg files={inputs.files} onImageUpload={onImageUpload} error={errors.files} />
        <SignInput
          type="text"
          placeholder="이름"
          name="username"
          value={inputs.username}
          onInputChange={onInputChange}
          error={errors.username}
          required
        />
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
        <SignInput
          type="password"
          placeholder="비밀번호 확인"
          name="pwCheck"
          value={inputs.pwCheck}
          onInputChange={onInputChange}
          error={errors.pwCheck}
          required
        />
        <SubmitBtn value="회원가입">회원가입</SubmitBtn>
        <div className="linkTo">
          <Link to="/login">계정이 있으신가요? 로그인</Link>
        </div>
      </form>
      <GoBackLink to="/" innerText="메인으로" />
    </div>
  );
};

export default SignUp;
