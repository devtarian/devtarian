import React from 'react';
import styled from 'styled-components';

const UploadImg = ({ previewImgs, onImageUpload }) => {
  const handleImageUpload = (e) => {
    onImageUpload(e);
  };
  return (
    <Wrap>
      <label>사진 선택 {previewImgs.length}/5</label>
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      <ul className="previewImgs">
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        <li className="imgContainer"></li>
        {previewImgs?.map((img, index) => (
          <li className="prevImg" key={img}>
            <img src={img} alt="" index={index} />
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default UploadImg;

const Wrap = styled.div`
  .previewImgs {
    position: relative;
    width: 100%;
    height: 150px;
    margin-top: 1rem;
    overflow: hidden;

    input {
      font-size: 0px;
    }

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
