import React from 'react';
import styled from 'styled-components';
import { RadioInput, UploadImg, Input, Textarea, SubmitBtn } from '../../components/form';
import useInput from '../../hooks/useInput';
import BgImg from '../../images/pexels-karolina-grabowska-4197908.jpg';

const CATEGORIES = ['가공식품', '과자/간식', '제과/제빵', '음료', '기타'];

const WikiForm = ({ user }) => {
  const INIT_WIKIPOST = [
    {
      category: '가공식품',
      files: [],
      product: '',
      ingredient: '',
      comments: '',
      commentList: [
        {
          id: 0,
          writer: user,
          createAt: '3초 전',
          contents: '',
        },
      ],
    },
  ];
  const { inputs, setInputs, errors, onInputChange, onImageUpload, requiredValidate } = useInput(INIT_WIKIPOST);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requireList = ['category', 'product', 'ingredient'];
    let isValid = requiredValidate(requireList);
    if (!isValid) return;

    setInputs(INIT_WIKIPOST);
  };

  return (
    <Wrap bg={BgImg}>
      <h2>위키 작성</h2>
      <form>
        <RadioInput
          name="category"
          label="카테고리"
          info={CATEGORIES}
          category={inputs.category}
          onChange={onInputChange}
          error={errors.category}
        />
        <UploadImg name="imgFiles" files={inputs.files} onImageUpload={onImageUpload} />
        <Input
          label="상품명"
          name="product"
          value={inputs.product}
          placeholder="상품명을 입력하세요."
          onChange={onInputChange}
          error={errors.product}
        />
        <Textarea
          label="성분"
          name="ingredient"
          value={inputs.ingredient}
          placeholder="ex. 밀가루 믹스 99% (통밀가루 98.4%, 수용성밀식이섬유1.6%), 효모, 설탕, 해바라기씨유, 정제소금, 맥아가루, 비타민C"
          onChange={onInputChange}
          error={errors.ingredient}
        />
        <SubmitBtn value="위키 제출" onSubmit={handleSubmit} />
      </form>
    </Wrap>
  );
};

export default WikiForm;

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
