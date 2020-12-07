import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Component {...props} />
        </Wrap>
      )}
    />
  );
};

export default PublicLayout;

const Wrap = styled.div`
  border: 1px solid #000;
`;
