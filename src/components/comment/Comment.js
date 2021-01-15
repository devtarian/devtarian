import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import apis from '../../Service/apis';
import WriterProfile, { WriterProfileWrap } from '../profile/WriterProfile';
import CommentForm from './CommentForm';

const Comment = ({ storeId, reviewId }) => {
  const [comments, setComments] = useState([]);
  const onCommentSubmit = (newComment) => {
    setComments((state) => [...state, newComment]);
  };

  useEffect(() => {
    apis.storeApi
      .getComments(storeId, reviewId)
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.log(err.response && err.response.data);
      });
  }, [storeId, reviewId, setComments]);

  return (
    <>
      <ul className="comments">
        {comments.map((comment) => (
          <Wrap key={comment.id}>
            <WriterProfile writer={comment.writer} createdAt={comment.createdAt} />
            <p className="comment">{comment.contents}</p>
          </Wrap>
        ))}
      </ul>
      <CommentForm storeId={storeId} reviewId={reviewId} onCommentSubmit={onCommentSubmit} />
    </>
  );
};

export default Comment;

const Wrap = styled.li`
  padding: 5px 15px 10px;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.background[2]};

  ${WriterProfileWrap} {
    a {
      color: ${(props) => props.theme.color[0]};
    }
  }
  .comment {
    padding-left: 38px;
  }
`;
