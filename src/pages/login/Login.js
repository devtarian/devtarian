import React from 'react';
import { Link } from 'react-router-dom';
import apis from '../../Service/apis';
import useInput from '../../hooks/useInput';
import SignInput from '../../components/form/SignInput';
import SubmitBtn from '../../components/form/SubmitBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';

const Login = ({ user, initUserValues, history }) => {
  const { inputs, setInputs, errors, onInputChange, requiredValidate } = useInput(initUserValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredList = ['email', 'password'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    try {
      await apis.authApi.login({
        email: inputs.email,
        pw: inputs.password,
      });
      // localStorage.setItem('apiKey', res.data.token);
      history.push('/');
      setInputs(initUserValues);
    } catch (err) {
      console.error(err);
      console.log(err.response && err.response.data);
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
      <GoBackLink to="/" />
    </div>
  );
};

export default Login;
