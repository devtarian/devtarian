import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/header/Header';

const FormLayout = ({ component: Component, ...rest }) => {
  const { isFetched, isLoggedIn } = useSelector((state) => state.auth);
  const token = localStorage.getItem('token');
  if (!token) {
    window.location = '/login';
  } else {
    if (isFetched && !isLoggedIn) {
      window.location = '/login';
    }
  }
  console.log({ isFetched, isLoggedIn });
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
