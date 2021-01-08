import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchModal from '../SearchModal';
import NaviItem from '../nav/NaviItem';
import { ReactComponent as MenuSvg } from '../../../images/icons/menu.svg';
import { ReactComponent as SearchSvg } from '../../../images/icons/search.svg';
import UserProfile from '../../UserProfile/UserProfile';

const Nav = ({ recentKeywords, onAddRecentKeywords, renderUserProfile, onSubNavShow }) => {
  const [show, setShow] = useState(false);

  const onToggleShow = (isShow) => {
    setShow(isShow);
  };

  const handleSearchNavClick = (e) => {
    e.preventDefault();
    onToggleShow(true);
  };

  const handleSubNavShow = (e) => {
    onSubNavShow(e);
  };

  return (
    <Wrap>
      <FullNav>
        <NaviItem to="/feed" innerText="피드 쓰기" />
        <NaviItem to="/vegwiki" innerText="비건위키" />
        <li className="navItem search" onClick={handleSearchNavClick}>
          <Link className="navLink" to="">
            <span>
              <Search />
            </span>
          </Link>
          {show && (
            <SearchModal
              recentKeywords={recentKeywords}
              onAddRecentKeywords={onAddRecentKeywords}
              onToggleShow={onToggleShow}
            />
          )}
        </li>

        <UserProfile />
      </FullNav>
      <HBGNav>
        <div className="navItem" onClick={handleSearchNavClick}>
          <Link className="navLink" to="/">
            <span>
              <Search />
            </span>
          </Link>
          {show && (
            <SearchModal
              recentKeywords={recentKeywords}
              onAddRecentKeywords={onAddRecentKeywords}
              onToggleShow={onToggleShow}
            />
          )}
        </div>
        <div className="navItem">
          <button className="navLink" onClick={handleSubNavShow}>
            <HBGBtn />
          </button>
        </div>
      </HBGNav>
    </Wrap>
  );
};

export default Nav;

const Wrap = styled.nav`
  position: relative;
  top: -10px;
  float: right;

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

  .search .navLink span:after {
    bottom: -10px;
  }
`;
const FullNav = styled.ul`
  @media (max-width: 767px) {
    display: none;
  }
`;
const HBGNav = styled.ul`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const Search = styled(SearchSvg)`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.color[1]};
`;

const HBGBtn = styled(MenuSvg)`
  width: 24px;
  height: 24px;
`;
