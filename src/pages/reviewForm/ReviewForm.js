import React, { useState } from 'react';
import styled from 'styled-components';
import Category from '../../components/form/Category';
import UploadImg from '../../components/form/UploadImg';
import VegLevel from '../../components/form/VegLevel';
import Input from '../../components/form/Input';
import Textarea from '../../components/form/Textarea';
import SubmitBtn from '../../components/form/SubmitBtn';
import BgImg from './images/pexels-karolina-grabowska-4197908.jpg';

const initReview = {
  category: 'store',
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
  const onImageUpload = (e) => {
    let files = e?.target.files;
    if (files.length > 5) {
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
        // setReview({
        //   ...review,
        //   previewImgs: [...fileURLs],
        // });
        setRreviewImgs([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };

  const onVegLevelClick = (nextActivedBtn) => {
    setActivedBtn(nextActivedBtn);
  };

  const onReviewChange = (e) => {
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
  };

  return (
    <Wrap bg={BgImg}>
      <h2>피드 쓰기</h2>
      <form>
        <Category review={review} onReviewChange={onReviewChange} />
        <UploadImg previewImgs={previewImgs} onImageUpload={onImageUpload} />
        <VegLevel activedBtn={activedBtn} onReviewChange={onReviewChange} onVegLevelClick={onVegLevelClick} />
        <Input label="제목" name="title" value={title} placeholder="제목을 입력하세요." onChange={onReviewChange} />
        <Textarea name="contents" value={contents} placeholder="내용을 입력하세요." onChange={onReviewChange} />
        <SubmitBtn value="피드 쓰기" onClick={handleSubmit} />
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
    border: 1px solid ${(props) => props.theme.gray[1]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    box-shadow: 0 2px 5px ${(props) => props.theme.gray[0]};

    background-color: ${(props) => props.theme.background[0]};

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
