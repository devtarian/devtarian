import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchModal from '../SearchModal';
import NaviItem from '../nav/NaviItem';
import UserAuth from './UserAuth';
import SubNav from './SubNav';
import Svg from '../../common/Svg';

const Nav = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState('');

  const handleShowModal = (modal) => {
    setModal(modal);
    setShow(!show);
  };

  return (
    <>
      <Wrap>
        <FullNav>
          <NaviItem to="/feed" innerText="피드 쓰기" />
          <NaviItem to="/vegwiki" innerText="비건위키" />
          <li className="navItem search" onClick={() => handleShowModal('search')}>
            <Link className="navLink" to="">
              <span>
                <Svg type="search" h="24px" w="24px" color="#777" />
              </span>
            </Link>
          </li>
          <UserAuth />
        </FullNav>
        <HBGNav>
          <div className="navItem search" onClick={() => handleShowModal('search')}>
            <Link className="navLink " to="/">
              <span>
                <Svg type="search" h="24px" w="24px" color="#777" />
              </span>
            </Link>
          </div>
          <div className="navItem">
            <button className="navLink" onClick={() => handleShowModal('subnav')}>
              <Svg type="menu" h="24px" w="24px" />
            </button>
          </div>
        </HBGNav>
      </Wrap>

      {show && modal === 'search' && <SearchModal onShowModal={handleShowModal} />}
      {show && modal === 'subnav' && <SubNav />}
    </>
  );
};

export default Nav;

const Wrap = styled.nav`
  position: relative;
  top: -12px;
  float: right;

  .navItem {
    float: left;

    .navLink {
      display: block;
      padding: 20px;
      span {
        position: relative;
      }
      span:after {
        content: '';
        z-index: 10000;
        position: absolute;
        left: 50%;
        bottom: -10px;
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
  .search {
    .navLink {
      span:after {
        bottom: -14px;
      }
    }
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
