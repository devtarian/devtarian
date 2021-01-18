import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/header/Header';

const FormLayout = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Header />
          {isLoggedIn ? <Component {...props} /> : <h3>로그인이 필요합니다.</h3>}
        </Wrap>
      )}
    />
  );
};

export default FormLayout;

const Wrap = styled.div`
  padding-top: 58px;
`;
