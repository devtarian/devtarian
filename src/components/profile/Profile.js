import styled from 'styled-components';

const Profile = ({ userData }) => {
  const { thumbNail, name, timeCreated } = userData;
  return (
    <>
      <ProfileWrap>
        <img src={thumbNail} alt="" />
        <div className="info">
          <strong>
            <a href="">{name}</a>
          </strong>
          <span>{timeCreated}</span>
        </div>
      </ProfileWrap>
    </>
  );
};

export default Profile;

export const ProfileWrap = styled.div`
  overflow: hidden;
  margin: 0.5rem 0;
  img {
    float: left;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  .info {
    float: left;
    width: calc(100% - 48px);
    margin-top: 0;
    a {
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
