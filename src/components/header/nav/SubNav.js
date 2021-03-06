import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserAuth';
import NaviItem from './NaviItem';

const SubNav = () => {
  return (
    <Wrap>
      <NaviItem to="/feed" innerText="피드 쓰기" />
      <NaviItem to="/vegwiki" innerText="비건위키" />
      <UserProfile />
    </Wrap>
  );
};

export default SubNav;

const Wrap = styled.ul`
  display: none;
  z-index: 9999;
  position: fixed;
  top: 58px;
  left: 0;
  width: 100%;
  text-align: right;
  background-color: rgba(255, 255, 255, 0.9);

  @media (max-width: 767px) {
    display: block;

    .profile {
      float: right;
    }
  }
`;
