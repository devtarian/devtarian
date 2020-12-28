import React from 'react';
import styled from 'styled-components';
import ImgCard from '../../card/ImgCard';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';

const SquareCarousel = (mg) => {
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;

  return (
    <SquareCarouselWrap>
      <h2>비건 편의점</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {DUMMY_PROD.map((data) => (
          <ImgCard key={data.id} data={data} value={value} ref={refCarouselLi} />
        ))}
      </CarouselUl>
      <CarouselBtn value={value} onCarouselBtnClick={onCarouselBtnClick} />
      <ViewAll />
    </SquareCarouselWrap>
  );
};

export default SquareCarousel;

export const SquareCarouselWrap = styled.section`
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

const DUMMY_PROD = [
  {
    id: 0,
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 1,
    src: 'http://placehold.it/300x300.png?text=B',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 2,
    src: 'http://placehold.it/300x300.png?text=C',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 3,
    src: 'http://placehold.it/300x300.png?text=D',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 4,
    src: 'http://placehold.it/300x300.png?text=E',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 5,
    src: 'http://placehold.it/300x300.png?text=F',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 6,
    src: 'http://placehold.it/300x300.png?text=G',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 7,
    src: 'http://placehold.it/300x300.png?text=H',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 8,
    src: 'http://placehold.it/300x300.png?text=I',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 9,
    src: 'http://placehold.it/300x300.png?text=J',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 10,
    src: 'http://placehold.it/300x300.png?text=k',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
];
