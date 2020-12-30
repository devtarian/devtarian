import React from 'react';
import styled from 'styled-components';
import CommentForm, { CommentFormWrap } from '../../components/comment/CommentForm';
import Comment from '../../components/comment/Comment';

const WikiComment = ({ commentList }) => {
  return (
    <Wrap>
      <strong className="totalComments">{commentList.length} 개의 댓글</strong>
      <div className="innerContainer">
        <CommentForm />
        <ul className="comments">
          {commentList.map((comment) => (
            <Comment key={comment.id} data={comment} />
          ))}
        </ul>
      </div>
    </Wrap>
  );
};

export default WikiComment;

const Wrap = styled.div`
  margin-top: 50px;

  .totalComments {
    display: block;
    margin-bottom: 50px;
  }
  .innerContainer {
    width: 768px;
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
      input {
        height: 40px;
      }
    }
  }
`;
