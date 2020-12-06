import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';

const SquareCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [liClientWidth, setLiClientWidth] = useState(288);
  const liSideMargin = 9;
  const [liLength, setLiLength] = useState(5);
  const refCarouselUl = useRef();
  const refCarouselLi = useRef();

  useEffect(() => {
    setLiClientWidth(refCarouselLi.current?.clientWidth);
    setLiLength(refCarouselUl.current?.childElementCount);
  }, []);

  const onCarouselBtnClick = (newIndex, newLeftPosition) => {
    setCurrentIndex(newIndex);
    setLeftPosition(newLeftPosition);
  };

  return (
    <Wrap>
      <h2>비건 편의점</h2>
      <CarouselUl
        ref={refCarouselUl}
        leftPosition={leftPosition}
        liClientWidth={liClientWidth}
        liLength={liLength}
        liSideMargin={liSideMargin}>
        {DUMMY_PROD.map((li) => (
          <li key={li.id} ref={refCarouselLi}>
            <img src={li.src} alt="" />
            <div className="cover">
              <div className="itemInfo">
                <span>{li.category}</span>
                <h3>{li.product}</h3>
              </div>
            </div>
          </li>
        ))}
      </CarouselUl>
      <CarouselBtn
        currentIndex={currentIndex}
        leftPosition={leftPosition}
        liClientWidth={liClientWidth}
        liSideMargin={liSideMargin}
        liLength={liLength}
        onCarouselBtnClick={onCarouselBtnClick}
      />
      <ViewAll />
    </Wrap>
  );
};

export default SquareCarousel;

const Wrap = styled.section`
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

const CarouselUl = styled.ul`
  width: ${(props) => (props.liClientWidth + props.liSideMargin * 2) * props.liLength}px;
  position: absolute;
  left: ${(props) => props.leftPosition}px;
  transition: all 0.3s ease;

  li {
    float: left;
    width: 270px;
    margin: 0 9px 40px;
    img {
      width: 270px;
      height: 300px;
      border-radius: 10px;
    }
    .cover {
      z-index: 100;
      position: absolute;
      top: 0;
      width: 270px;
      height: 300px;
      border-radius: 10px;
      background-color: #2e7d32;
      opacity: 0;
      transition: all 0.3s ease-in-out;

      .itemInfo {
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        h3 {
          margin-top: 0.4rem;
          font-size: 20px;
        }
      }
    }
    &:hover .cover {
      opacity: 0.75;
    }
  }
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
