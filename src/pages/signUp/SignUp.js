import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import UploadProfileImg from './UploadProfileImg';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';
import authActions from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const initUserValues = {
  userName: '',
  email: '',
  password: '',
  passwordCheck: '',
  avatar: '',
  files: [],
};

const SignUp = () => {
  const dispatch = useDispatch();
  const { inputs, setInputs, errors, setErrors, onImageUpload, onInputChange, requiredValidate } = useInput(
    initUserValues
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredList = ['userName', 'email', 'password', 'passwordCheck', 'files'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    try {
      dispatch(
        authActions.signup({
          username: inputs.userName,
          email: inputs.email,
          pw: inputs.password,
          thumbNailFile: inputs.files[0],
        })
      );
      setInputs(initUserValues);
    } catch (err) {
      console.error(err);
      console.log(err.response?.data);
      setErrors(err.response?.data);
    }
  };
  console.log(inputs.files);
  return (
    <div className="wrap">
      <form className="signForm" onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <UploadProfileImg files={inputs.files} onImageUpload={onImageUpload} error={errors.files} />
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
      <GoBackLink to="/" innerText="메인으로" />
    </div>
  );
};

export default SignUp;
