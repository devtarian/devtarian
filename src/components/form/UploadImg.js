import React, { useRef } from 'react';
import styled from 'styled-components';

const UploadImg = ({ name, files, onImageUpload }) => {
  console.log('uploadImg', files);
  const refHiddenInput = useRef();

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    refHiddenInput?.current.click();
  };

  const handleImageUpload = (e) => {
    onImageUpload(e);
  };

  return (
    <Wrap className="wrap">
      <label>사진 선택 {files?.length}/5</label>
      <input type="file" name={name} accept="image/*" multiple onChange={handleImageUpload} ref={refHiddenInput} />
      <button className="uploadBtn" onClick={handleUploadBtnClick}>
        사진 추가
      </button>
      <ul className="previewImgs">
        {[...new Array(5)].map((_, index) => (
          <ImgContainer key={index} src={files[index] && URL.createObjectURL(files[index])} />
        ))}
      </ul>
    </Wrap>
  );
};

export default React.memo(UploadImg);

const Wrap = styled.div`
  input {
    display: none;
  }
  .uploadBtn {
    padding: 0.65rem 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    background-color: ${(props) => props.theme.green[1]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    color: ${(props) => props.theme.background[0]};
    &:hover {
      background-color: ${(props) => props.theme.green[0]};
    }
  }
  .previewImgs {
    position: relative;
    width: 100%;
    margin-top: 1rem;
    overflow: hidden;
  }
`;

const ImgContainer = styled.li`
  float: left;
  width: calc(20% - 0.5rem);
  margin: 0 0.25rem 0.5rem;
  border: 1px solid ${(props) => props.theme.gray[1]};
  border-radius: 4px;
  background: ${(props) => (props.src ? `url(${props.src})` : props.theme.background[1])};
  background-size: cover;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  @media (max-width: 767px) {
    width: calc(33% - 0.5rem);
  }
`;
