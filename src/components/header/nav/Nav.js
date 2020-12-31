import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchModal from '../SearchModal';

const Nav = ({ recentKeywords, onAddRecentKeywords }) => {
  const [show, setShow] = useState(false);

  const onToggleShow = (isShow) => {
    setShow(isShow);
  };

  const handleSearchNavClick = (e) => {
    e.preventDefault();
    onToggleShow(true);
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
        <li li className="navItem sign">
          <Link className="navLink" to="/login">
            <span>로그인 / 회원가입</span>
          </Link>
        </li>
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
  .sign span {
    color: ${(props) => props.theme.green[1]};
    font-weight: bold;
  }
`;
