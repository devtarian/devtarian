import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { wikiDetailActions } from '../../redux/actions';
import CommentForm, { CommentFormWrap } from '../../components/commentForm/CommentForm';
import Comment from './Comment';

const WikiComment = ({ wikiId, commentList, comments }) => {
  const dispatch = useDispatch();

  const onCreateComment = (contents) => {
    dispatch(wikiDetailActions.createWikiComment({ wikiId, contents }));
  };

  const onDeleteComment = (commentId) => {
    dispatch(wikiDetailActions.deleteWikiComment({ wikiId, commentId }));
  };

  return (
    <Wrap>
      <strong className="totalComments">{comments} 개의 댓글</strong>
      <div className="innerContainer">
        <CommentForm onCreateComment={onCreateComment} />
        <ul className="comments">
          <Comment commentData={commentList} onDeleteComment={onDeleteComment} />
        </ul>
      </div>
    </Wrap>
  );
};

export default WikiComment;

const Wrap = styled.div`
  margin-top: 50px;
  padding: 0 1.5rem;

  .totalComments {
    display: block;
    margin-bottom: 50px;
  }
  .innerContainer {
    width: 100%;
    max-width: 768px;
    margin: 0 auto 25px;
    padding-top: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.background[1]};
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

    .comments {
      padding: 0px 15px;
      overflow: hidden;
    }

    ${CommentFormWrap} {
      .userThumbnail {
        width: 30px;
        height: 30px;
        margin: 8px 8px 0 0;
      }
      form {
        input {
          height: 40px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 80px;
  }
`;
