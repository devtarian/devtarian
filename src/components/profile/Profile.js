import styled from 'styled-components';

const Profile = ({ userData }) => {
  const { thumbNail, name, timeCreated } = userData;
  return (
    <>
      <Wrap>
        <img src={thumbNail} alt="" />
        <div className="info">
          <strong>
            <a href="">{name}</a>
          </strong>
          <span>{timeCreated}</span>
        </div>
      </Wrap>
    </>
  );
};

export default Profile;

const Wrap = styled.div`
  overflow: auto;
  margin: 0.5rem 0;
  img {
    float: left;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  .info {
    float: left;
    width: calc(100% - 48px);
    margin-top: 0.5rem;
    a {
      float: left;
      height: 100%;
      margin-top: -7px;
      padding: 7px;
      color: ${(props) => props.theme.green[1]};
    }
    span {
      float: right;
      font-size: 12px;
    }
  }
`;
