import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import noProfile from '../../images/noProfile.png';

const UserProfile = () => {
  const user = useSelector((state) => state.auth);
  const { username, thumbNail } = user;

  return (
    <UserProfileWrap>
      <div className="thumbNail">
        <img src={thumbNail ? thumbNail : noProfile} alt="" />
      </div>
      <strong>{username}</strong>
    </UserProfileWrap>
  );
};

export default UserProfile;

export const UserProfileWrap = styled.div`
  overflow: hidden;
  display: block;
  padding: 0 20px;

  .thumbNail {
    float: left;
    width: 32px;
    height: 32px;
    margin: 0.6rem 0;
    vertical-align: middle;

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
    font-size: 15px;
    color: ${(props) => props.theme.green[1]};
  }
`;
