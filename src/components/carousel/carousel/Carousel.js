import React from 'react';
import styled from 'styled-components';
import ImgTextCard from '../../card/ImgTextCard';
import CarouselBtn from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';

const Carousel = ({ carouselData, mg, title }) => {
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;

  return (
    <Wrap>
      <h2>{title}</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselData.map((data, index) => (
          <li key={index} ref={refCarouselLi}>
            <ImgTextCard storeData={data} />
          </li>
        ))}
      </CarouselUl>
      <CarouselBtn value={value} onCarouselBtnClick={onCarouselBtnClick} />
      <ViewAll to="/" />
    </Wrap>
  );
};

export default Carousel;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 426px;
  margin: 0 auto;
  overflow: hidden;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const CarouselUl = styled.ul`
  width: ${(props) => (props.value.liClientWidth + props.value.liSideMargin * 2) * props.value.liLength}px;
  position: absolute;
  left: ${(props) => props.value.leftPosition}px;
  transition: all 0.3s ease;

  li {
    float: left;
    width: 270px;
    margin: 0 ${(props) => props.value.liSideMargin}px 40px;
  }
`;
