import React, { useMemo } from 'react';
import styled from 'styled-components';
import { UploadImg, StarRating, Textarea } from '../../../components/form';
import { changeFileToImgUrl } from '../../../utils/helper';

const FeedFormInfo = ({ inputs, errors, onChange, onImageUpload }) => {
  const imgUrls = useMemo(() => changeFileToImgUrl(inputs.files), [inputs.files]);
  return (
    <Wrap>
      <UploadImg name="imgFiles" imgUrls={imgUrls} onImageUpload={onImageUpload} />
      <StarRating name="starRating" onChange={onChange} error={errors.starRating} />
      <Textarea
        label="소개"
        name="contents"
        value={inputs.contents || ''}
        placeholder="가게 소개를 작성해주세요."
        onChange={onChange}
        rows="5"
      />
    </Wrap>
  );
};

export default FeedFormInfo;

const Wrap = styled.div``;
