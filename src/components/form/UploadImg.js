import React, { useRef } from 'react';
import styled from 'styled-components';

const UploadImg = ({ name, imgFileURLs, onImageUpload }) => {
  const refHiddenFileInput = useRef();

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    refHiddenFileInput?.current.click();
  };

  const handleImageUpload = (e) => {
    onImageUpload(e);
  };
  return (
    <Wrap>
      <label>사진 선택 {imgFileURLs.length}/5</label>
      <input
        className="fileInput"
        type="file"
        name={name}
        url={imgFileURLs}
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        ref={refHiddenFileInput}
      />
      <button className="uploadBtn" onClick={handleUploadBtnClick}>
        사진 추가
      </button>
      <ul className="previewImgs">
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        {imgFileURLs?.map((img, index) => (
          <li className="prevImg" key={img + index}>
            <img src={img} alt="" index={index} />
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default UploadImg;

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
    height: 150px;
    margin-top: 1rem;
    overflow: hidden;

    .imgContainer {
      border: 1px solid ${(props) => props.theme.gray[1]};
    }
    li,
    .prevImg img {
      float: left;
      width: 150px;
      height: 150px;
      border-radius: 4px;
    }
    li + li {
      margin-left: 0.5rem;
    }
    .prevImg img {
      position: absolute;
      top: 0;
      left: ${(props) => props.index}px;
      margin-left: -7px;
    }
  }
`;
