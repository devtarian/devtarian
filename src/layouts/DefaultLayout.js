import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, ...rest }) => {
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

export default DefaultLayout;

const Wrap = styled.div`
  padding-top: 58px;
`;
