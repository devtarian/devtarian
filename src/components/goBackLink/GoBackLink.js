import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoBackLink = ({ to, innerText }) => {
  return (
    <GoBackWrap>
      <Link to={to}>&lt; {innerText}</Link>
    </GoBackWrap>
  );
};

export default GoBackLink;

export const GoBackWrap = styled.div`
  a {
    position: fixed;
    top: 5rem;
    left: 42px;
    color: ${(props) => props.theme.color[2]};
  }
`;
