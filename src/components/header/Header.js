import styled from 'styled-components';
import Nav from './nav/Nav';

const Header = ({ recentKeywords, onAddRecentKeywords }) => {
  return (
    <Wrap>
      <Logo>
        <a href="">Devtarian</a>
      </Logo>
      <Nav recentKeywords={recentKeywords} onAddRecentKeywords={onAddRecentKeywords} />
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 58px;
  padding: 15px 65px 0 25px;
  -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
  box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
  background-color: ${(props) => props.theme.background[0]};
`;

const Logo = styled.h1`
  float: left;
  font-size: 20px;

  a {
    padding: 17px;
  }
`;
