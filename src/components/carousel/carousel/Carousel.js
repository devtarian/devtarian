import React from 'react';
import styled from 'styled-components';
import ImgTextCard from '../../card/ImgTextCard';
import CarouselBtn from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';

const Carousel = ({ carouselInfo }) => {
  const { value, onCarouselBtnClick } = useCarousel();
  const { refCarouselUl, refCarouselLi } = value;

  return (
    <Wrap>
      <h2>근처의 비건 식당</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselInfo.map((li) => (
          <li key={li.id} ref={refCarouselLi}>
            <ImgTextCard itemInfo={li.review} width={270} height={175} webkitLineClamp={3} />
          </li>
        ))}
      </CarouselUl>
      <CarouselBtn value={value} onCarouselBtnClick={onCarouselBtnClick} />
      <ViewAll />
    </Wrap>
  );
};

export default Carousel;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 426px;
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
