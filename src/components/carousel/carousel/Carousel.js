import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ItemInfo from '../ItemInfo';
import CarouselBtn from '../CarouselBtn';
import ViewAll from '../VeiwAll';

const Carousel = ({ carouselInfo }) => {
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
      <h2>근처의 비건 식당</h2>
      <CarouselUl
        ref={refCarouselUl}
        leftPosition={leftPosition}
        liClientWidth={liClientWidth}
        liLength={liLength}
        liSideMargin={liSideMargin}>
        {carouselInfo.map((li) => (
          <li key={li.id} ref={refCarouselLi}>
            <ItemInfo itemInfo={li.review} width={270} height={175} webkitLineClamp={3} />
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
  width: ${(props) => (props.liClientWidth + props.liSideMargin * 2) * props.liLength}px;
  position: absolute;
  left: ${(props) => props.leftPosition}px;
  transition: all 0.3s ease;

  li {
    float: left;
    width: 270px;
    margin: 0 ${(props) => props.liSideMargin}px 40px;
  }
`;
