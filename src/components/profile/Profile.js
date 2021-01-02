import styled from 'styled-components';
import noProfile from '../../images/noProfile.png';

const Profile = ({ userData, createAt }) => {
  const { thumbNail, username } = userData;
  return (
    <>
      <ProfileWrap>
        <div className="thumbNail">
          <img src={thumbNail ? thumbNail : noProfile} alt="" />
        </div>
        <div className="info">
          <strong>{username}</strong>
          <span>{createAt}</span>
        </div>
      </ProfileWrap>
    </>
  );
};

export default Profile;

export const ProfileWrap = styled.div`
  position: relative;
  overflow: hidden;

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

  .info {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);

    strong {
      font-size: 14px;
      color: ${(props) => props.theme.green[1]};
    }
    span {
      display: block;
      margin-top: 0.1rem;
      font-size: 11px;
      color: ${(props) => props.theme.color[1]};
    }
  }
`;
