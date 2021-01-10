import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { SubmitBtnWrap } from '../components/form/SubmitBtn';
import { GoBackWrap } from '../components/goBackLink/GoBackLink';
import bgImg from '../images/pexels-ready-made-3850624.jpg';

const INIT_USER_VALUES = {
  userName: '',
  email: '',
  password: '',
  passwordCheck: '',
  avatar: '',
  files: [],
};

const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap bg={bgImg}>
          <Component {...props} initUserValues={INIT_USER_VALUES} />
        </Wrap>
      )}
    />
  );
};

export default PublicLayout;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 6rem auto;
  padding: 0 1.5rem;
  text-align: center;

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
  ${GoBackWrap} {
    a {
      top: 2rem;
    }
  }

  @media (max-width: 767px) {
    form {
      padding: 1rem 2rem 2rem;
    }
  }
`;
