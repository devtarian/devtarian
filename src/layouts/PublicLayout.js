import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import apis from '.././Service/apis';
import { validate } from '../utils/helper';
import { SubmitBtnWrap } from '../components/form/SubmitBtn';
import bgImg from './images/pexels-ready-made-3850624.jpg';

const initUserValues = {
  userName: '',
  email: '',
  password: '',
  passwordCheck: '',
  avatar: '',
  avatarURL: '',
};

const PublicLayout = ({ component: Component, user, ...rest }) => {
  const [userValues, setUserValues] = useState(initUserValues);
  const [errors, setErrors] = useState({
    userName: {
      isTrue: true,
      message: '표준 한글, 영문 이름을 입력해 주세요. (2~20자)',
    },
    email: {
      isTrue: true,
      message: '이메일 형식으로 입력해 주세요.',
    },
    password: {
      isTrue: true,
      message: '영문과 숫자를 조합해 8자리 이상 입력하세요.',
    },
    passwordCheck: {
      isTrue: true,
      message: '비밀번호와 일치하지 않습니다.',
    },
  });
  const history = useHistory();

  const onProfileUpload = (e) => {
    let file = e.target.files[0];
    let fileURLs = URL.createObjectURL(file);

    if (!file.type.includes('image')) {
      e.preventDefault();
      e.target.value = '';
      throw new Error('이미지 파일만 올려주세요 : )');
    } else {
      setUserValues({ ...userValues, avatar: file, avatarURL: fileURLs });
    }
  };

  const onUserValuesChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const isTrue = validate(name, value, userValues);

    setErrors((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        isTrue,
      },
    }));

    setUserValues({ ...userValues, [name]: value });
  };

  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    const isTrues = Object.values(errors).map((err) => err.isTrue);
    const isFalse = (curValue) => curValue !== true;
    if (isTrues.some(isFalse)) return;

    try {
      await apis.usersApi.signUp({
        username: userValues.userName,
        email: userValues.email,
        pw: userValues.password,
        avatar: userValues.email,
      });
      alert('가입 되었습니다.');
      history.push('/');
      setUserValues(initUserValues);
    } catch (err) {
      throw Error(err.message);
    }
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    const isTrues = Object.values(errors).map((err) => err.isTrue);
    const isFalse = (curValue) => curValue !== true;
    if (isTrues.some(isFalse)) return;

    try {
      const res = await apis.authApi.login({
        email: userValues.email,
        pw: userValues.password,
      });
      localStorage.setItem('apiKey', res.data.token);
      history.push('/');
      setUserValues(initUserValues);
    } catch (err) {
      throw Error(err.message);
    }
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap bg={bgImg}>
          <Component
            {...props}
            user={user}
            userValues={userValues}
            errors={errors}
            onProfileUpload={onProfileUpload}
            onUserValuesChange={onUserValuesChange}
            onSignUpSubmit={onSignUpSubmit}
            onLoginSubmit={onLoginSubmit}
          />
        </Wrap>
      )}
    />
  );
};

export default PublicLayout;

const Wrap = styled.section`
  position: relative;
  width: 500px;
  height: 100%;
  margin: 0 auto 40px;
  padding: 7rem 1.5rem 0;
  text-align: center;
  .wrap {
    margin-top: 2rem;
  }
  h2 {
    margin: 2rem 0.5rem 3rem;
    font-size: 3rem;
    color: ${(props) => props.theme.gray[2]};
  }
  form {
    position: relative;
    padding: 1rem 3.5rem 2rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[1]};
    box-shadow: 0 2px 3px ${(props) => props.theme.gray[1]};
    background: rgba(255, 255, 255, 0.85);
    ${SubmitBtnWrap} {
      width: 50%;
      margin-top: 1rem;
    }
    .linkTo {
      margin-top: 1rem;
      a {
        font-size: 12px;
        color: ${(props) => props.theme.gray[1]};
      }
      a + a {
        margin-left: 0.3rem;
      }
    }
    &:before {
      z-index: -1;
      content: '';
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url(${(props) => props.bg});
      background-size: cover;
      background-position: center;
    }
  }
  .backToMain {
    position: fixed;
    top: 1.5rem;
    right: 3.5rem;
    color: ${(props) => props.theme.gray[2]};
    font-weight: bolder;
  }
`;