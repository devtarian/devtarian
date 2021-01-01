import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../../profile/Profile';
import SearchModal from '../SearchModal';

const Nav = ({ user, recentKeywords, onLogOut, onAddRecentKeywords }) => {
  const [show, setShow] = useState(false);

  const onToggleShow = (isShow) => {
    setShow(isShow);
  };

  const handleSearchNavClick = (e) => {
    e.preventDefault();
    onToggleShow(true);
  };

  const handleLogOut = () => {
    onLogOut(null);
    localStorage.removeItem('token');
  };

  const renderUserProfile = () => {
    return user ? (
      <>
        <li className="navItem">
          <Link className="navLink signOut" to="/" onClick={handleLogOut}>
            <span>로그아웃</span>
          </Link>
        </li>
        <li className="navItem">
          <Profile userData={user} createAt="" />
        </li>
      </>
    ) : (
      <li className="navItem">
        <Link className="navLink signIn" to="/login">
          <span>로그인 / 회원가입</span>
        </Link>
      </li>
    );
  };

  return (
    <Wrap>
      <Navi>
        <li className="navItem">
          <Link className="navLink" to="/feed">
            <span>피드 쓰기</span>
          </Link>
        </li>
        <li className="navItem">
          <Link className="navLink" to="/vegwiki">
            <span>비건위키</span>
          </Link>
        </li>
        <li className="navItem" onClick={handleSearchNavClick}>
          <Link className="navLink" to="/">
            <span>검색</span>
          </Link>
          {show && (
            <SearchModal
              recentKeywords={recentKeywords}
              onAddRecentKeywords={onAddRecentKeywords}
              onToggleShow={onToggleShow}
            />
          )}
        </li>
        {renderUserProfile()}
      </Navi>
    </Wrap>
  );
};

export default Nav;

const Wrap = styled.nav`
  position: relative;
  top: -10px;
  float: right;
`;

const Navi = styled.ul`
  .navItem {
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
  }
  .signOut span {
    color: ${(props) => props.theme.color[1]};
    font-weight: bold;
  }
  .signIn span {
    color: ${(props) => props.theme.green[1]};
    font-weight: bold;
  }
  ${ProfileWrap} {
    width: 88px;
    margin-left: 20px;
    .thumbNail {
      width: 32px;
      height: 32px;
      margin: 0.6rem 0;
    }
    .info {
      left: 39px;

      a {
        font-size: 15px;
      }
    }
  }
`;
