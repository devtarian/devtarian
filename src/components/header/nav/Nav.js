import styled from 'styled-components';
import SearchModal from '../SearchModal';

const Nav = () => {
  return (
    <NavContainer>
      <Navi>
        <li className="navItem">
          <a className="navLink" href="">
            <span>피드 쓰기</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="">
            <span>비건 편의점</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="">
            <span>검색</span>
          </a>
          <SearchModal />
        </li>
      </Navi>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  position: relative;
  top: -10px;
  float: right;
`;

const Navi = styled.ul`
  .navItem {
    float: left;
  }
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
      background-color: green;
      transition: all 0.2s ease-in;
    }
    &:hover span:after {
      width: 100%;
      left: 0;
    }
  }
`;
