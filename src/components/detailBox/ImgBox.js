import React from 'react';
import styled from 'styled-components';
import noImg from '../../images/noImg.jpg';

const ImgBox = ({ data }) => {
  console.log('ImgBox', data);
  return (
    <Wrap>
      <div className="largeImg">
        <img src={data.imgUrls[0] ? data.imgUrls[0] : noImg} alt="" />
      </div>
      <ul className="smallImgs">
        {[...new Array(5)].map((_, index) => (
          <li key={index}>
            <img src={data.imgUrls[index] ? data.imgUrls[index] : noImg} alt="" />
            <div className="cover"></div>
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default ImgBox;

const Wrap = styled.section`
  float: left;
  width: 600px;
  max-height: 700px;

  .largeImg {
    width: 100%;
    height: 539px;
    white-space: nowrap;
    text-align: center;
    background-color: ${(props) => props.theme.background[1]};
    &:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      width: 1px;
    }
    img {
      max-width: 600px;
      max-height: 539px;
      border-radius: 10px;
      vertical-align: middle;
    }
  }

  .smallImgs {
    width: 100%;
    margin-top: 29px;

    li {
      position: relative;
      display: inline-block;
      width: 114px;
      max-height: 114px;
      margin: 0 3px 40px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 10px;
      }

      &:before {
        content: '';
        display: block;
        padding-top: 100%;
      }

      .cover {
        z-index: 100;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: ${(props) => props.theme.green[1]};
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
      &:hover .cover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 767px) {
    float: none;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    .largeImg {
      max-height: 400px;
      img {
        width: 100%;
        max-width: 600px;
      }
    }
    .smallImgs {
      li {
        width: calc(20% - 6px);
      }
    }
  }
`;
