import styled from 'styled-components';
import Nav from './nav/Nav';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <a href="">Devtarian</a>
      </Logo>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 58px;
  padding: 15px 65px 0 25px;
`;

const Logo = styled.h1`
  float: left;
  font-size: 20px;

  a {
    padding: 17px;
  }
`;
