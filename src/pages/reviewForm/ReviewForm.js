import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import VegLevel from './VegLevel';
import BgImg from './images/pexels-karolina-grabowska-4197908.jpg';

const initReview = {
  category: '',
  previewImgs: [],
  vegLevel: '',
  title: '',
  contents: '',
};

const ReviewForm = () => {
  const [review, setReview] = useState(initReview);
  const [previewImgs, setRreviewImgs] = useState([]);
  const [activedBtn, setActivedBtn] = useState('');
  const { title, contents } = review;
  const fileRef = useRef();
  const radioRef = useRef();

  const handleImageUpload = (e) => {
    const files = e.target.files;
    if (files.length > 5) {
      fileRef.current.value = '';
      alert('최대 5장까지 선택해주세요 : )');
      return;
    }
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

  const onVegLevelClick = (nextActivedBtn) => {
    setActivedBtn(nextActivedBtn);
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      previewImgs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(review);
    e.preventDefault();
    setRreviewImgs([]);
    setActivedBtn('');
    setReview(initReview);
    fileRef.current.value = '';
    radioRef.current.checked = false;
    console.log(radioRef.current.checked);
  };

  return (
    <Wrap bg={BgImg}>
      <h2>피드 쓰기</h2>
      <form>
        <Categoty>
          <label>카테고리</label>
          <input type="radio" name="category" value="stroe" onChange={handleReviewChange} ref={radioRef} /> 가게
          <input type="radio" name="category" value="product" onChange={handleReviewChange} ref={radioRef} /> 제품
        </Categoty>
        <UploadImg>
          <label>사진 선택 {previewImgs.length}/5</label>
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} ref={fileRef} />
          <ul className="previewImgs">
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            <li className="imgContainer"></li>
            {previewImgs?.map((img, index) => (
              <li className="prevImg" key={img}>
                <img src={img} alt="" index={index} />
              </li>
            ))}
          </ul>
        </UploadImg>
        <VegLevel activedBtn={activedBtn} onReviewChange={handleReviewChange} onVegLevelClick={onVegLevelClick} />
        <Title>
          <label>제목</label>
          <input name="title" value={title} placeholder="제목을 입력하세요." onChange={handleReviewChange}></input>
        </Title>
        <Contents>
          <label>내용</label>
          <textarea
            name="contents"
            value={contents}
            placeholder="내용을 입력하세요."
            onChange={handleReviewChange}></textarea>
        </Contents>
        <SubmitBtn>
          <button type="submit" className="submitBtn" onClick={handleSubmit}>
            피드 쓰기
          </button>
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
const UploadImg = styled.div`
  .previewImgs {
    position: relative;
    width: 100%;
    height: 150px;
    margin-top: 1rem;
    overflow: hidden;

    input {
      font-size: 0px;
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
