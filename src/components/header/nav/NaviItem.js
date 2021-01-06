import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NaviItem = ({ to, innerText, sign, onLogOut }) => {
  return (
    <Wrap>
      <Link className={sign ? 'navLink signOut' : 'navLink'} to={to} onClick={onLogOut}>
        <span>{innerText}</span>
      </Link>
    </Wrap>
  );
};

export default NaviItem;

const Wrap = styled.li`
  float: left;

  .navLink {
    display: block;
    padding: 15px 20px;
    span {
      position: relative;
    }
    span:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -17px;
      width: 0px;
      height: 4px;
      background-color: ${(props) => props.theme.green[1]};
      transition: all 0.2s ease-in;
    }
    &:hover span:after {
      width: 100%;
      left: 0;
    }
  }
  .signOut span {
    color: ${(props) => props.theme.color[1]};
    font-weight: bold;
  }
  .signIn span {
    color: ${(props) => props.theme.green[1]};
    font-weight: bold;
  }

  @media (max-width: 767px) {
    float: none;
  }
`;
