import React from 'react';
import styled from 'styled-components';

const ReviewForm = () => {
  return (
    <Wrap>
      <h2>피드 쓰기</h2>
      <form>
        <Categoty>
          <label>카테고리</label>
          <input type="radio" name="category" /> 가게
          <input type="radio" name="category" /> 제품
        </Categoty>
        <UploadImg>
          <label>사진 선택 0/5</label>
          <input type="file" accept="image/*" multiple></input>
          <ul className="imgPreview">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </UploadImg>
        <VegLevel>
          <label>채식 단계</label>
          <button>
            <i></i>
            <span>비건</span>
          </button>
          <button>
            <i></i>
            <span>락토</span>
          </button>
          <button>
            <i></i>
            <span>오보</span>
          </button>
          <button>
            <i></i>
            <span>락토 오보</span>
          </button>
          <button>
            <i></i>
            <span>페스코</span>
          </button>
        </VegLevel>
        <Title>
          <label>제목</label>
          <input></input>
        </Title>
        <Contents>
          <label>내용</label>
          <textarea></textarea>
        </Contents>
        <button className="submitBtn">피드 쓰기</button>
      </form>
    </Wrap>
  );
};

export default ReviewForm;

const Wrap = styled.section`
  width: 1000px;
  height: 100%;
  margin: 0 auto 40px;
  padding: 3rem 1.5rem 0;
  /* background-color: rgba(0, 0, 0, 0.1); */
  h2 {
    margin: 1rem 0.5rem 1.5rem;
    font-size: 1.8rem;
  }
  form {
    padding: 1rem 2rem 2rem;
    border-radius: 10px;
    border: 1px solid #999;
  }
  div {
    margin-top: 2rem;
  }
  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: bolder;
  }

  .submitBtn {
    width: 100%;
    margin-top: 2rem;
    padding: 0.65rem 0.75rem;
    border-radius: 4px;
    border: 1px solid #999;
    background-color: green;
  }
`;

const Categoty = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */
  input + input {
    margin-left: 1rem;
  }
`;
const VegLevel = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */
  button {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    border: 1px solid #999;
    transition: all 0.3s ease;

    &:hover {
      background-color: green;
    }
  }
  button + button {
    margin-left: 0.5rem;
  }
`;
const UploadImg = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */
  .imgPreview {
    width: 100%;
    margin-top: 1rem;
    &:after {
      content: '';
      display: block;
      clear: both;
    }

    li {
      float: left;
      width: 150px;
      height: 150px;
      border-radius: 4px;
      border: 1px solid #999;
    }
    li + li {
      margin-left: 0.5rem;
    }
  }
`;
const Title = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */

  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #999;
  }
`;
const Contents = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */

  textarea {
    width: 100%;
    padding: 10px;
    min-height: 500px;
    border-radius: 4px;
    border: 1px solid #999;
  }
`;
