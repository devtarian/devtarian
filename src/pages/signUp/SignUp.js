import React from 'react';
import { Link } from 'react-router-dom';
import apis from '../../Service/apis';
import useInput from '../../hooks/useInput';
import UploadProfileImg from './UploadProfileImg';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';

const SignUp = ({ initUserValues, history }) => {
  const { inputs, setInputs, errors, onImageUpload, onInputChange, requiredValidate } = useInput(initUserValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredList = ['userName', 'email', 'password', 'passwordCheck'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    try {
      await apis.usersApi.signUp({
        username: inputs.userName,
        email: inputs.email,
        pw: inputs.password,
        avatar: inputs.avatar,
      });
      alert('가입 되었습니다.');
      history.push('/');
      setInputs(initUserValues);
    } catch (err) {
      console.error(err);
      console.log(err.response?.data.error);
    }
  };
  console.log(errors);
  return (
    <div className="wrap">
      <form className="signForm" onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <UploadProfileImg inputs={inputs} onImageUpload={onImageUpload} onInputChange={onInputChange} />
        <SignInput
          type="text"
          placeholder="이름"
          name="userName"
          value={inputs.userName}
          onInputChange={onInputChange}
          error={errors.userName}
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
          name="password"
          value={inputs.password}
          onInputChange={onInputChange}
          error={errors.password}
          required
        />
        <SignInput
          type="password"
          placeholder="비밀번호 확인"
          name="passwordCheck"
          value={inputs.passwordCheck}
          onInputChange={onInputChange}
          error={errors.passwordCheck}
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
