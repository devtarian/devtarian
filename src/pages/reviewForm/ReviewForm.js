import React from 'react';
import styled from 'styled-components';
import { UploadImg, StarRating, Input, Textarea, SubmitBtn } from '../../components/form';
import history from '../../history';
import useInput from '../../hooks/useInput';
import BgImg from '../../images/pexels-karolina-grabowska-4197908.jpg';
import apis from '../../service/apis';
import { changeFileToImgUrl } from '../../utils/helper';

const INIT_REVIEW = {
  starRating: '',
  title: '',
  contents: '',
  files: [],
};

const ReviewForm = ({ match }) => {
  const storeId = match.params.storeId;
  const { inputs, setInputs, errors, onInputChange, onImageUpload, requiredValidate } = useInput(INIT_REVIEW);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requiredList = ['starRating', 'title', 'contents'];
      let isValid = requiredValidate(requiredList);
      if (!isValid) return;

      const { files, ...body } = inputs;

      const formData = new FormData();
      files.forEach((file) => formData.append('file', file));
      formData.append('body', JSON.stringify(body));
      await apis.storeApi.createReview(storeId, formData);
      history.goBack();
      setInputs(INIT_REVIEW);
    } catch (err) {
      console.log(err.response ? err.response : err);
    }
  };

  return (
    <Wrap bg={BgImg}>
      <h2>리뷰 작성</h2>
      <form>
        <UploadImg name="imgFiles" imgUrls={changeFileToImgUrl(inputs.files)} onImageUpload={onImageUpload} />
        <StarRating name="starRating" onChange={onInputChange} error={errors.starRating} />
        <Input
          label="제목"
          name="title"
          value={inputs.title}
          placeholder="제목을 입력하세요."
          onChange={onInputChange}
          error={errors.title}
        />
        <Textarea
          name="contents"
          value={inputs.contents}
          placeholder="내용을 입력하세요."
          onChange={onInputChange}
          error={errors.contents}
        />
        <SubmitBtn value="리뷰 제출" onSubmit={handleSubmit} />
      </form>
    </Wrap>
  );
};

export default ReviewForm;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  max-width: 1000px;
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
