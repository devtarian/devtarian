import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../redux/actions/authActions';
import NaviItem from './NaviItem';
import noProfile from '../../../images/noProfile.png';

const UserAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const { username, thumbNail } = user;
  console.log(user);
  const handleLogOut = () => {
    dispatch(authActions.logout());
  };
  return user.username ? (
    <>
      <NaviItem to="/" innerText="로그아웃" sign={true} onLogOut={handleLogOut} />
      <li className="navItem profile">
        <Profile>
          <div className="thumbNail">
            <img src={thumbNail ? thumbNail : noProfile} alt="" />
          </div>
          <strong>{username}</strong>
        </Profile>
      </li>
    </>
  ) : (
    <NaviItem to="login" innerText="로그인 / 회원가입" sign={true} />
  );
};

export default UserAuth;

const Profile = styled.div`
  overflow: hidden;
  display: block;
  padding: 0 20px;

  .thumbNail {
    float: left;
    width: 40px;
    height: 40px;
    vertical-align: middle;
    margin: 0.5rem 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  strong {
    float: left;
    margin-left: 0.5rem;
    margin-top: 17px;
    font-size: 14px;
    color: ${(props) => props.theme.green[1]};
  }
`;
