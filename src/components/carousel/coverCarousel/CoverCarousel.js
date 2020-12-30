import React from 'react';
import styled from 'styled-components';
import ImgCard from '../../card/ImgCard';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';

const InfoCoverCarousel = ({ carouselData, mg }) => {
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;
  console.log('carouselData', carouselData);
  return (
    <InfoCoverCarouselWrap>
      <h2>비건위키</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselData.map((data, index) => (
          <ImgCard key={index} data={data} value={value} ref={refCarouselLi} />
        ))}
      </CarouselUl>
      <CarouselBtn value={value} onCarouselBtnClick={onCarouselBtnClick} />
      <ViewAll />
    </InfoCoverCarouselWrap>
  );
};

export default InfoCoverCarousel;

export const InfoCoverCarouselWrap = styled.section`
  position: relative;
  width: 100%;
  height: 421px;
  overflow: hidden;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
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
