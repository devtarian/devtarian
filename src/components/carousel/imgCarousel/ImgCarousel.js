import React from 'react';
import styled from 'styled-components';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import noImg from '../../../images/noImg.jpg';
import useCarousel from '../../../hooks/useCarousel';

const ImgCarousel = ({ carouselData, mg }) => {
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;
  console.log('imgCarousel', value);
  return (
    <Wrap>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselData.map((data, index) => (
          <li key={index} data={data}>
            <img src={carouselData[index] ? carouselData[index] : noImg} alt="" ref={refCarouselLi} />
          </li>
        ))}
      </CarouselUl>
      <CarouselBtn value={value} onCarouselBtnClick={onCarouselBtnClick} />
    </Wrap>
  );
};

export default ImgCarousel;

export const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${CarouselBtnWrap} {
    top: 0px;
    height: 220px;
  }
`;

export const CarouselUl = styled.ul`
  width: ${(props) => (props.value.liClientWidth + props.value.liSideMargin * 2) * props.value.liLength}px;
  position: absolute;
  left: ${(props) => props.value.leftPosition}px;
  transition: all 0.3s ease;

  li {
    float: left;
    width: 269px;
    height: 220px;
    margin: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
