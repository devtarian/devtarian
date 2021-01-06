import styled from 'styled-components';
import Nav from './nav/Nav';
import { Link } from 'react-router-dom';

const Header = ({ user, recentKeywords, onAddRecentKeywords, renderUserProfile, onSubNavShow }) => {
  return (
    <Wrap>
      <Logo>
        <Link to="/">Devtarian</Link>
      </Logo>
      <Nav
        user={user}
        recentKeywords={recentKeywords}
        onAddRecentKeywords={onAddRecentKeywords}
        renderUserProfile={renderUserProfile}
        onSubNavShow={onSubNavShow}
      />
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
  padding: 15px 0 0 25px;
  -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.color[2]};
  box-shadow: 0 3px 5px ${(props) => props.theme.color[2]};
  background-color: ${(props) => props.theme.background[0]};
`;

const Logo = styled.h1`
  float: left;
  font-size: 20px;

  a {
    padding: 17px;
  }
`;
