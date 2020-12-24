import React from 'react';
import styled from 'styled-components';
import { UploadImg, StarRating, Textarea } from '../../../components/form';

const FeedFormInfo = ({ inputs, onChange, onImageUpload }) => {
  return (
    <Wrap>
      <UploadImg name="imgFiles" files={inputs.files} onImageUpload={onImageUpload} />
      <StarRating name="starRating" onChange={onChange} />
      <Textarea
        label="소개"
        name="contents"
        value={inputs.cntents || ''}
        placeholder="가게 소개를 작성해주세요."
        onChange={onChange}
        rows="5"
      />
    </Wrap>
  );
};

export default FeedFormInfo;

const Wrap = styled.div``;
