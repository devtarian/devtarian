import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../redux/actions';
import NaviItem from './NaviItem';
import UserProfile from '../../profile/UserProfile';

const UserAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handleLogOut = () => {
    dispatch(authActions.logout());
  };
  return user.username ? (
    <>
      <NaviItem to="/" innerText="로그아웃" sign={true} onLogOut={handleLogOut} />
      <li className="navItem profile">
        <UserProfile />
      </li>
    </>
  ) : (
    <NaviItem to="/login" innerText="로그인 / 회원가입" sign={true} />
  );
};

export default UserAuth;
