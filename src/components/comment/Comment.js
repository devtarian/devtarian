import React from 'react';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../profile/Profile';

const Comment = ({ commentData }) => {
  const { writer, createAt, commentContents } = commentData;
  return (
    <Wrap>
      <Profile userData={writer} createAt={createAt} />
      <p className="comment">{commentContents}</p>
    </Wrap>
  );
};

export default Comment;

const Wrap = styled.li`
  li {
    padding: 5px 0 10px;
    overflow: hidden;
    border-bottom: 1px solid ${(props) => props.theme.background[2]};

    ${ProfileWrap} {
      a {
        color: ${(props) => props.theme.color[0]};
      }
    }
  }
  .comment {
    margin-top: 9px;
    padding-left: 47px;
  }
`;