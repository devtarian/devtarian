import React, { useState, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import noImg from '../../../images/noImg.jpg';

const ImgCarousel = ({ carouselData }) => {
  const refWrap = useRef();
  const refCarouselUl = useRef();
  const refCarouselLi = useRef();
  const [wrapW, setWrapW] = useState();
  const [innerW, setInnerW] = useState();
  const [carouselValue, setCarouselValue] = useState({
    currentIndex: 0,
    leftPosition: 0,
    liClientWidth: 0,
    liSideMargin: 0,
    liLength: 0,
  });

  useLayoutEffect(() => {
    function updateInnerW() {
      setInnerW(window.innerWidth);
    }
    window.addEventListener('resize', updateInnerW);
    updateInnerW();
    return () => window.removeEventListener('resize', updateInnerW);
  }, []);

  useLayoutEffect(() => {
    setWrapW(refWrap.current.clientWidth);
  }, [innerW]);

  useLayoutEffect(() => {
    setCarouselValue({
      ...carouselValue,
      liClientWidth: wrapW,
      liLength: refCarouselUl.current?.childElementCount,
    });
  }, [wrapW]);

  const onCarouselBtnClick = (newIndex, newLeftPosition) => {
    setCarouselValue({ ...carouselValue, currentIndex: newIndex, leftPosition: newLeftPosition });
  };

  return (
    <Wrap ref={refWrap}>
      <CarouselUl ref={refCarouselUl} value={carouselValue} wrapw={wrapW}>
        {carouselData.map((data, index) => (
          <li key={index} data={data} ref={refCarouselLi}>
            <img src={data ? data : noImg} alt="" />
          </li>
        ))}
      </CarouselUl>
      <CarouselBtn value={carouselValue} onCarouselBtnClick={onCarouselBtnClick} />
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
    height: 100%;
  }
`;

export const CarouselUl = styled.ul`
  width: ${(props) => (props.value.liClientWidth + props.value.liSideMargin * 2) * props.value.liLength}px;
  height: 100%;
  position: absolute;
  left: ${(props) => props.value.leftPosition}px;
  transition: all 0.3s ease;

  li {
    float: left;
    width: ${(props) => props.value.liClientWidth}px;
    height: 100%;
    margin: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
