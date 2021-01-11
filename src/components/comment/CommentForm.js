import React from 'react';
import styled from 'styled-components';
import noProfile from '../../images/noProfile.png';
import apis from '../../Service/apis';
import useInput from '../../hooks/useInput';

const INIT_COMMENT = {
  comment: '',
};

const CommentForm = () => {
  const { inputs, setInputs, onInputChange } = useInput(INIT_COMMENT);

  const handleSubmit = async (e) => {
    e.preventDerault();

    try {
      await apis.storeApi.createComments(inputs);
      setInputs(INIT_COMMENT);
    } catch (err) {
      console.error(err.response ? err.response : err);
    }
  };

  return (
    <CommentFormWrap>
      <div className="writeComments">
        <img className="userThumbnail" src={noProfile} alt="" />
        <form onSubmit={handleSubmit}>
          <label>댓글달기</label>
          <input placeholder="댓글을 입력하세요." name="comment" value={inputs.comment} onInputChange={onInputChange} />
        </form>
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
    form {
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
