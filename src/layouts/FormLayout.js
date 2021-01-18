import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import history from '../history';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';

const FormLayout = ({ component: Component, ...rest }) => {
  console.log('??????');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    history.push('/login');
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Header />
          <Component {...props} />
        </Wrap>
      )}
    />
  );
};

export default FormLayout;

const Wrap = styled.div`
  padding-top: 58px;
`;
