import React, { useRef } from 'react';
import styled from 'styled-components';

const UploadProfileImg = ({ userValues, onProfileUpload, onUserValuesChange }) => {
  const refHiddenInput = useRef();

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    refHiddenInput?.current.click();
  };

  const handleImageUpload = (e) => {
    onUserValuesChange(e);
    onProfileUpload(e);
  };
  return (
    <Wrap className="wrap" url={userValues.avatarURL}>
      <label>프로필 사진</label>
      <input type="file" name="avatar" accept="image/*" ref={refHiddenInput} onChange={handleImageUpload} />
      <div className="imgContainer" url={userValues.avatarURL} onClick={handleUploadBtnClick}></div>
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
    width: 180px;
    height: 180px;
    margin: -1.5rem auto 4rem;
    border-radius: 50%;
    border: 6px solid ${(props) => props.theme.green[1]};
    background: ${(props) => (props.url ? `url(${props.url})` : props.theme.background[1])};
    background-size: cover;
    cursor: pointer;

    &:after {
      content: '프로필 변경';
      display: block;
      margin-top: 183px;
      font-size: 18px;
      color: ${(props) => props.theme.green[1]};
    }
  }
`;
