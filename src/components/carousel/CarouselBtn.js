import React from 'react';
import styled from 'styled-components';

const CarouselBtn = () => {
  return (
    <CarouselBtnWrap>
      <button className="prev">
        <span>&lt;</span>
      </button>
      <button className="next">
        <span>&gt;</span>
      </button>
    </CarouselBtnWrap>
  );
};

export default CarouselBtn;

export const CarouselBtnWrap = styled.div`
  position: relative;
  top: 7px;
  height: 177px;

  button {
    position: absolute;
    top: 43%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    font-size: 20px;
    color: #ccc;
  }
  .prev {
    z-index: 110;
    left: -4px;
  }
  .next {
    z-index: 110;
    right: -4px;
  }
`;
