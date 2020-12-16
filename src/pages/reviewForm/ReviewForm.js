import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioInput, UploadImg, Checkbox, StarRating, Input, Textarea, SubmitBtn } from '../../components/form';
import BgImg from './images/pexels-karolina-grabowska-4197908.jpg';

const initReview = {
  category: '가게',
  imgFiles: [],
  imgFileURLs: [],
  vegLevel: '',
  starRating: '',
  title: '',
  contents: '',
};

const VEGLEVELS = ['비건', '락토', '오보', '락토오보', '페스코'];

const ReviewForm = () => {
  const [review, setReview] = useState(initReview);
  const [activedBtn, setActivedBtn] = useState('');
  const { imgFiles, imgFileURLs, title } = review;

  const onImageUpload = (e) => {
    let files = e.target.files;
    if (files.length > 5) {
      alert('최대 5장까지 선택해주세요 : )');
      return;
    }
    let file;
    let fileURLs = [];
    let fileList = [];
    let filesLength = files.length > 5 ? 5 : files.length;
    for (let i = 0; i < filesLength; i++) {
      file = files[i];
      fileURLs[i] = URL.createObjectURL(file);
      fileList[i] = files[i];
    }

    setReview({
      ...review,
      imgFiles: [...fileList],
      imgFileURLs: [...fileURLs],
    });
  };

  const onCheckboxClick = (nextActivedBtn) => {
    setActivedBtn(nextActivedBtn);
  };

  const onReviewChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(review);
    e.preventDefault();
    setActivedBtn('');
    setReview(initReview);
  };

  return (
    <Wrap bg={BgImg}>
      <h2>피드 쓰기</h2>
      <form>
        <RadioInput name="category" label="카테고리" review={review} onReviewChange={onReviewChange} />
        <UploadImg name="imgFiles" value={imgFiles} imgFileURLs={imgFileURLs} onImageUpload={onImageUpload} />
        <Checkbox
          name="vegLevel"
          title="채식 단계"
          info={VEGLEVELS}
          activedBtn={activedBtn}
          onReviewChange={onReviewChange}
          onCheckboxClick={onCheckboxClick}
        />
        <StarRating name="starRating" onReviewChange={onReviewChange} />
        <Input
          label="제목"
          name="title"
          value={title}
          placeholder="제목을 입력하세요."
          onReviewChange={onReviewChange}
        />
        <Textarea name="contents" placeholder="내용을 입력하세요." onReviewChange={onReviewChange} />
        <SubmitBtn value="피드 쓰기" onSubmit={handleSubmit} />
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

  .wrap {
    margin-top: 2rem;
  }
  h2 {
    margin: 1rem 0.5rem 1.5rem;
    font-size: 1.8rem;
  }
  form {
    position: relative;
    padding: 1rem 2rem 2rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    box-shadow: 0 2px 5px ${(props) => props.theme.gray[0]};
    background: rgba(255, 255, 255, 0.85);

    * {
      z-index: 1;
    }
    label,
    h3 {
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
