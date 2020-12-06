import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ItemInfo from '../ItemInfo';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';

const ReviewCarousel = ({ carouselInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [liClientWidth, setLiClientWidth] = useState(365);
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
      <h2>새로운 리뷰</h2>
      <CarouselUl
        ref={refCarouselUl}
        leftPosition={leftPosition}
        liClientWidth={liClientWidth}
        liLength={liLength}
        liSideMargin={liSideMargin}>
        {carouselInfo.map((info) => (
          <li key={info.id} ref={refCarouselLi}>
            <Profile userInfo={info.user} />
            <ItemInfo itemInfo={info.review} width={365} height={235} webkitLineClamp={2} />
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

export default ReviewCarousel;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
  ${CarouselBtnWrap} {
    top: 56px;
    height: 235px;
  }
`;

const CarouselUl = styled.ul`
  width: ${(props) => (props.liClientWidth + props.liSideMargin * 2) * props.liLength}px;
  position: absolute;
  left: ${(props) => props.leftPosition}px;
  transition: all 0.3s ease;

  li {
    float: left;
    width: 366px;
    margin: 0 ${(props) => props.liSideMargin}px 40px;
  }
`;
