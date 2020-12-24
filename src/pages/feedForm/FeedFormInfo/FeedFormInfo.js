import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { UploadImg, StarRating, Textarea, Input } from '../../../components/form';

const FeedFormInfo = ({ inputs, setInputs, errors, onChange }) => {
  const handleUpload = useCallback(
    (e) => {
      const files = e.target.files;
      console.log(files);

      if (files.length > 5) return alert('5개 까지만 추가 가능합니다.');

      const inputFiles = [];
      for (let i = 0; i < files.length; i++) {
        inputFiles[i] = files[i];
      }

      setInputs((state) => ({
        ...state,
        files: inputFiles,
      }));
    },
    [setInputs]
  );

  const imgFileURLs = useMemo(() => inputs.files.map((item) => URL.createObjectURL(item)), [inputs.files]);

  return (
    <Wrap>
      <UploadImg name="imgFiles" imgFileURLs={imgFileURLs} onImageUpload={handleUpload} />
      <StarRating name="starRating" onChange={onChange} />
      <Textarea
        label="소개"
        name="contents"
        value={inputs.cntents || ''}
        placeholder="가게 소개를 작성해주세요."
        onChange={onChange}
        rows="5"
      />
      <Input
        label="작성자 이름"
        name="userName"
        value={inputs.userName || ''}
        placeholder="이름을 작성해주세요."
        onChange={onChange}
        error={errors.userName}
      />
      <Input
        label="이메일"
        name="email"
        value={inputs.email || ''}
        placeholder="이메일을 작성해주세요."
        onChange={onChange}
        error={errors.email}
      />
    </Wrap>
  );
};

export default FeedFormInfo;

const Wrap = styled.div``;
