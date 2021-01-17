import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import WriterProfile, { WriterProfileWrap } from '../../components/profile/WriterProfile';

const Comment = ({ commentData, onDeleteComment }) => {
  const userId = useSelector((state) => state.auth.userId);
  const refComment = useRef(null);

  const handleDeleteComment = () => {
    let result = window.confirm('댓글을 삭제하시겠습니까?');
    if (result) onDeleteComment(refComment.current.id);
  };
  return (
    <>
      <ul className="comments">
        {commentData.map((comment, index) => (
          <Wrap key={index} id={comment.id} ref={refComment}>
            <WriterProfile writer={comment.writer} createdAt={comment.createdAt} />
            <p className="comment">{comment.contents}</p>
            {userId === comment.writer.userId && <button className="deleteBtn" onClick={handleDeleteComment} />}
          </Wrap>
        ))}
      </ul>
    </>
  );
};

export default Comment;

const Wrap = styled.li`
  position: relative;
  padding: 5px 15px 10px;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.background[2]};
  .deleteBtn {
    display: none;
  }
  &:hover .deleteBtn {
    display: block;
    position: absolute;
    top: 12px;
    right: 0;
    background: ${(props) => `url(${props.theme.svg.close})`} center center / contain no-repeat;
    width: 9px;
    height: 9px;
    opacity: 0.3;
  }

  ${WriterProfileWrap} {
    a {
      color: ${(props) => props.theme.color[0]};
    }
  }
  .comment {
    padding-left: 38px;
  }
`;
