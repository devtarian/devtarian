import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../redux/actions/authActions';
import NaviItem from '../header/nav/NaviItem';
import Profile from '../profile/Profile';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const handleLogOut = () => {
    dispatch(authActions.logout());
  };
  return user.username ? (
    <>
      <NaviItem to="/" innerText="로그아웃" sign={true} onLogOut={handleLogOut} />
      <li className="navItem profile">
        <Profile profileData={user} />
      </li>
    </>
  ) : (
    <NaviItem to="login" innerText="로그인 / 회원가입" sign={true} />
  );
};

export default UserProfile;
