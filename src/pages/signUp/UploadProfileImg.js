import React, { useRef } from 'react';
import styled from 'styled-components';
import noImg from '../../components/form/images/images.png';

const UploadProfileImg = ({ inputs, onImageUpload, onInputChange }) => {
  const refHiddenInput = useRef();

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    refHiddenInput?.current.click();
  };

  const handleImageUpload = (e) => {
    onInputChange(e);
    onImageUpload(e);
  };

  const onError = (e) => {
    e.target.setAttribute('src', noImg);
  };

  return (
    <Wrap className="wrap">
      <label>프로필 사진</label>
      <input type="file" name="avatar" accept="image/*" ref={refHiddenInput} onChange={handleImageUpload} />
      <div className="imgContainer" onClick={handleUploadBtnClick}>
        <img src={inputs.avatarURL} alt="프로필사진" onError={onError} />
      </div>
    </Wrap>
  );
};

export default UploadProfileImg;

const Wrap = styled.div`
  label {
    font-size: 0;
  }
  input {
    display: none;
  }
  .imgContainer {
    img {
      display: block;
      width: 180px;
      height: 180px;
      margin: -2rem auto 4rem;
      border-radius: 50%;
      border: 6px solid ${(props) => props.theme.green[1]};
      background: ${(props) => (props.url ? `url(${props.url})` : props.theme.background[1])};
      background-size: cover;
      font-size: 0;
      cursor: pointer;
    }

    &:after {
      content: '프로필 변경';
      display: block;
      margin: -50px 0 5px;
      font-size: 18px;
      color: ${(props) => props.theme.green[1]};
    }
  }
`;
