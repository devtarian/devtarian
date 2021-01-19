import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import noProfile from '../../images/noProfile.png';

const INIT_COMMENT = {
  contents: '',
};

const CommentForm = ({ onCreateComment }) => {
  const userThumbNail = useSelector((state) => state.auth.thumbNail);
  const { inputs, setInputs, onInputChange } = useInput(INIT_COMMENT);

  const handleCreateComment = (e) => {
    if (e.key === 'Enter') {
      onCreateComment(inputs);
      setInputs(INIT_COMMENT);
    }
  };

  return (
    <CommentFormWrap>
      <div className="writeComments">
        <img className="userThumbnail" src={userThumbNail || noProfile} alt="" />
        <div className="form">
          <label>댓글달기</label>
          <input
            placeholder="댓글을 입력하세요."
            name="contents"
            value={inputs.contents}
            onChange={onInputChange}
            onKeyPress={handleCreateComment}
          />
        </div>
      </div>
    </CommentFormWrap>
  );
};

export default CommentForm;

export const CommentFormWrap = styled.div`
  .writeComments {
    padding: 5px 15px;
    overflow: hidden;
    .userThumbnail {
      float: left;
      width: 40px;
      height: 40px;
      margin: 2px 8px 0 0;
      border-radius: 50%;
    }
    .form {
      float: left;
      width: calc(100% - 48px);
      padding: 5px 0;
      label {
        display: none;
      }
      input {
        width: 100%;
        margin-top: 0px;
        padding: 8px 10px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.background[0]};
        font-size: 0.8rem;
        color: ${(props) => props.theme.color[2]};
      }
    }
  }
`;
