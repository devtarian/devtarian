import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import apis from '../../../service/apis';
import WriterProfile, { WriterProfileWrap } from '../../../components/profile/WriterProfile';
import CommentForm from '../../../components/commentForm/CommentForm';
import { STORE_CREATE_COMMENT, STORE_DELETE_COMMENT } from '../../../redux/types';

const Comment = ({ storeId, reviewId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const [comments, setComments] = useState([]);
  const refComment = useRef(null);

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

  const onCreateComment = async (contents) => {
    try {
      const res = await apis.storeApi.createComment({ storeId, reviewId, data: contents });
      const newComment = res.data;
      setComments((state) => [...state, newComment]);
    } catch (err) {
      console.error(err.response ? err.response : err);
    }
    dispatch({ type: STORE_CREATE_COMMENT, payload: reviewId });
  };

  const handleDeleteComment = async (commentId) => {
    try {
      let result = window.confirm('댓글을 삭제하시겠습니까?');
      if (!result) return;
      await apis.storeApi.deleteComment({ storeId, reviewId, commentId });
      await apis.storeApi.getComments(storeId, reviewId).then((data) => {
        setComments(data);
      });
    } catch (err) {
      console.error(err.response ? err.response : err);
    }
    dispatch({ type: STORE_DELETE_COMMENT, payload: reviewId });
  };

  return (
    <>
      <ul className="comments">
        {comments.map((comment) => (
          <Wrap key={comment.id} id={comment.id} ref={refComment}>
            <WriterProfile writer={comment.writer} createdAt={comment.createdAt} />
            <p className="comment">{comment.contents}</p>
            {userId === comment.writer.userId && (
              <button className="deleteBtn" onClick={() => handleDeleteComment(comment.id)} />
            )}
          </Wrap>
        ))}
      </ul>
      <CommentForm storeId={storeId} reviewId={reviewId} onCreateComment={onCreateComment} />
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
    right: 10px;
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
