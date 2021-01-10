import React from 'react';
import ReactLoadig from 'react-loading';
import styled from 'styled-components';
import { theme } from '../../config/config';

const Loading = () => {
  return (
    <Wrap>
      <ReactLoadig className="bubbles" type="bubbles" color={theme.brown[1]} height={70} width={70} />
    </Wrap>
  );
};

export default Loading;

const Wrap = styled.div`
  position: relative;
  height: calc(100vh - 58px);

  .bubbles {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
