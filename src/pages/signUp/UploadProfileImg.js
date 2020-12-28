import React, { useRef } from 'react';
import styled from 'styled-components';
import noImg from '../../images/noProfile.png';

const UploadProfileImg = ({ files, onImageUpload, error }) => {
  const refHiddenInput = useRef();

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    refHiddenInput?.current.click();
  };

  return (
    <Wrap className="wrap">
      <label>프로필 사진</label>
      <input type="file" name="avatar" accept="image/*" ref={refHiddenInput} onChange={onImageUpload} />
      <div className="imgContainer" onClick={handleUploadBtnClick}>
        <img src={files[0] ? URL.createObjectURL(files[0]) : noImg} alt="프로필사진" />
        <p className={error ? 'err on' : 'err'}>{error}</p>
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
    position: relative;
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
    .err {
      display: none;
      position: absolute;
      bottom: -15px;
      right: 0;
      left: 0;
      font-size: 11px;
      color: ${(props) => props.theme.brown[1]};
    }
    .err.on {
      display: block;
    }
  }
`;
