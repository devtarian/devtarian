import React from 'react';
import styled from 'styled-components';
import { RadioInput, UploadImg, Checkbox, StarRating, Input, Textarea, SubmitBtn } from '../../components/form';
import useInput from '../../hooks/useInput';
import BgImg from '../../images/pexels-karolina-grabowska-4197908.jpg';

const INIT_REVIEW = {
  category: '가게',
  files: [],
  vegLevel: '',
  starRating: '',
  title: '',
  contents: '',
};

const VEGLEVELS = ['비건', '락토', '오보', '락토오보', '페스코'];

const ReviewForm = () => {
  const { inputs, setInputs, errors, onInputChange, onImageUpload, requiredValidate } = useInput(INIT_REVIEW);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredList = ['vegLevel', 'starRating', 'title', 'contents'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    console.log(inputs);
    setInputs(INIT_REVIEW);
  };

  return (
    <Wrap bg={BgImg}>
      <h2>피드 쓰기</h2>
      <form>
        <RadioInput name="category" label="카테고리" category={inputs.category} onChange={onInputChange} />
        <UploadImg name="imgFiles" files={inputs.files} onImageUpload={onImageUpload} />
        <Checkbox
          name="vegLevel"
          label="채식 단계"
          info={VEGLEVELS}
          activedBtn={inputs.vegLevel}
          onChange={onInputChange}
          error={errors.vegLevel}
        />
        <StarRating name="starRating" onChange={onInputChange} error={errors.starRating} />
        <Input
          label="제목"
          name="title"
          value={inputs.title}
          placeholder="제목을 입력하세요."
          onChange={onInputChange}
          error={errors.title}
        />
        <Textarea name="contents" placeholder="내용을 입력하세요." onChange={onInputChange} error={errors.contents} />
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
