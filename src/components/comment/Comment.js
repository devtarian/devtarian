import React from 'react';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../profile/Profile';

const Comment = ({ data }) => {
  console.log('commentData', data);
  const { writer, createAt, commentContents } = data;
  return (
    <Wrap>
      <Profile userData={writer} createAt={createAt} />
      <p className="comment">{commentContents}</p>
    </Wrap>
  );
};

export default Comment;

const Wrap = styled.li`
  padding: 5px 15px 10px;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.background[2]};

  ${ProfileWrap} {
    a {
      color: ${(props) => props.theme.color[0]};
    }
  }
  .comment {
    padding-left: 38px;
  }
`;
