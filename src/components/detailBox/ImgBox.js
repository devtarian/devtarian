import React from 'react';
import styled from 'styled-components';
import ImgCarousel from '../carousel/imgCarousel/ImgCarousel';
import { CarouselBtnWrap } from '../carousel/CarouselBtn';
import noImg from '../../images/noImg.jpg';

const ImgBox = ({ data }) => {
  return (
    <Wrap>
      <section className="detailImg">
        <div className="imgContainer">
          <img src={data.files[0] ? URL.createObjectURL(data.files[0]) : noImg} alt="" />
        </div>
        <ImgCarousel carouselData={data.files} mg={7} />
      </section>
    </Wrap>
  );
};

export default ImgBox;

const Wrap = styled.div`
  float: left;
  width: 600px;
  height: 700px;

  .imgContainer {
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

  ${CarouselBtnWrap} {
    button {
      top: 17%;
    }
  }
`;
