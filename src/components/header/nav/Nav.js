import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchModal from '../SearchModal';
import NaviItem from '../nav/NaviItem';
import { ReactComponent as MenuSvg } from '../../../images/icons/menu.svg';
import { ReactComponent as SearchSvg } from '../../../images/icons/search.svg';
import UserAuth from './UserAuth';
import SubNav from './SubNav';

const Nav = () => {
  const [modal, setModal] = useState('');

  const handleCloseModal = () => setModal('');
  const handleOpenModal = (modal) => setModal(modal);

  return (
    <>
      <Wrap>
        <FullNav>
          <NaviItem to="/feed" innerText="피드 쓰기" />
          <NaviItem to="/vegwiki" innerText="비건위키" />
          <li className="navItem search" onClick={() => handleOpenModal('search')}>
            <Link className="navLink" to="">
              <span>
                <Search />
              </span>
            </Link>
          </li>
          <UserAuth />
        </FullNav>
        <HBGNav>
          <div className="navItem" onClick={() => handleOpenModal('search')}>
            <Link className="navLink" to="/">
              <span>
                <Search />
              </span>
            </Link>
          </div>
          <div className="navItem">
            <button className="navLink" onClick={() => handleOpenModal('subnav')}>
              <HBGBtn />
            </button>
          </div>
        </HBGNav>
      </Wrap>

      {modal === 'search' && <SearchModal onCloseModal={handleCloseModal} />}
      {modal === 'subnav' && <SubNav />}
    </>
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
        z-index: 100000;
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
