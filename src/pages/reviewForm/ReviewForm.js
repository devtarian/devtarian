import React, { useState } from 'react';
import styled from 'styled-components';
import BgImg from './images/pexels-karolina-grabowska-4197908.jpg';

const ReviewForm = () => {
  const [previewImgs, setRreviewImgs] = useState([]);
  const handleImageUpload = (e) => {
    const files = e.target.files;
    let fileURLs = [];
    let file;
    let filesLength = files.length > 5 ? 5 : files.length;
    for (let i = 0; i < filesLength; i++) {
      file = files[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setRreviewImgs([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Wrap bg={BgImg}>
      <h2>피드 쓰기</h2>
      <form>
        <Categoty>
          <label>카테고리</label>
          <input type="radio" name="category" /> 가게
          <input type="radio" name="category" /> 제품
        </Categoty>
        <UploadImg>
          <label>사진 선택 0/5</label>
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
          <ul className="imgPreview">
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            {previewImgs?.map((img, index) => (
              <li className="prevImg" key={img}>
                <img src={img} alt="" index={index + 1} />
              </li>
            ))}
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
          <input placeholder="제목을 입력하세요."></input>
        </Title>
        <Contents>
          <label>내용</label>
          <textarea placeholder="내용을 입력하세요."></textarea>
        </Contents>
        <SubmitBtn>
          <button className="submitBtn">피드 쓰기</button>
        </SubmitBtn>
      </form>
    </Wrap>
  );
};

export default ReviewForm;

const Wrap = styled.section`
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto 40px;
  padding: 3rem 1.5rem 0;

  h2 {
    margin: 1rem 0.5rem 1.5rem;
    font-size: 1.8rem;
  }
  form {
    position: relative;
    padding: 1rem 2rem 2rem;
    border-radius: 10px;
    border: 1px solid #999;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.15);
    box-shadow: 0 2px 5px rgba(57, 63, 72, 0.15);
    background-color: rgba(255, 255, 255, 0.95);

    * {
      z-index: 1;
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
    &:before {
      z-index: -1;
      content: '';
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url(${(props) => props.bg});
      background-size: cover;
    }
  }
`;

const Categoty = styled.div`
  input + input {
    margin-left: 1rem;
  }
`;
const VegLevel = styled.div`
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
  .imgPreview {
    position: relative;
    width: 100%;
    margin-top: 1rem;
    &:after {
      content: '';
      display: block;
      clear: both;
    }

    .imgContainer {
      border: 1px solid #999;
    }
    li,
    .prevImg img {
      float: left;
      width: 150px;
      height: 150px;
      border-radius: 4px;
    }
    li + li {
      margin-left: 0.5rem;
    }
    .prevImg img {
      position: absolute;
      top: 0;
      left: ${(props) => props.index}px;
      margin-left: -7px;
    }
  }
`;
const Title = styled.div`
  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #999;
  }
`;
const Contents = styled.div`
  textarea {
    width: 100%;
    padding: 10px;
    min-height: 500px;
    border-radius: 4px;
    border: 1px solid #999;
  }
`;
const SubmitBtn = styled.div`
  width: 33.3333%;
  margin: 0 auto;
  margin-top: 2rem;

  border-radius: 4px;
  border: 1px solid #999;
  background-color: green;
  text-align: center;

  button {
    width: 100%;
    height: 100%;
    padding: 0.65rem 0.75rem;
    color: #fff;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.25);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.25);
  }
`;
