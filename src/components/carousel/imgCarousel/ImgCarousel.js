import React from 'react';
import styled from 'styled-components';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import noImg from '../../../images/noImg.jpg';
import useCarousel from '../../../hooks/useCarousel';

const ImgCarousel = ({ carouselData, mg }) => {
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;
  return (
    <Wrap>
      <CarouselUl ref={refCarouselUl} value={value}>
        {[...new Array(10)].map((_, index) => (
          <CarouselLi key={index} value={value}>
            <img
              src={carouselData[index] ? URL.createObjectURL(carouselData[index]) : noImg}
              alt=""
              ref={refCarouselLi}
            />
            <div className="cover"></div>
          </CarouselLi>
        ))}
      </CarouselUl>
      <CarouselBtn value={value} onCarouselBtnClick={onCarouselBtnClick} />
    </Wrap>
  );
};

export default ImgCarousel;

export const Wrap = styled.section`
  position: relative;
  bottom: -13px;
  width: 100%;
  height: 135px;
  overflow: hidden;

  ${CarouselBtnWrap} {
    top: 0px;
    height: 301px;
  }
`;

export const CarouselUl = styled.ul`
  width: ${(props) => (props.value.liClientWidth + props.value.liSideMargin * 2) * props.value.liLength}px;
  position: absolute;
  left: ${(props) => props.value.leftPosition}px;
  transition: all 0.3s ease;
`;

export const CarouselLi = styled.li`
  float: left;
  width: 136px;
  margin: 0 ${(props) => props.value.liSideMargin}px 40px;

  img {
    width: 136px;
    height: 136px;
    border-radius: 10px;
  }
  .cover {
    z-index: 100;
    position: absolute;
    top: 0;
    width: 136px;
    height: 136px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.green[1]};
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  &:hover .cover {
    opacity: 0.8;
  }
`;
