import styled from 'styled-components';
import SearchModal from '../SearchModal';

const Nav = () => {
  return (
    <NavContainer>
      <ul>
        <NavItem className="navItem">
          <a href="">피드 쓰기</a>
        </NavItem>
        <NavItem className="navItem">
          <a href="">비건 편의점</a>
        </NavItem>
        <NavItem className="navItem">
          <a href="">검색</a>
          {/* <SearchModal /> */}
        </NavItem>
      </ul>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  float: right;
`;

const NavItem = styled.li`
  float: left;

  a {
    padding: 20px;
  }
`;
