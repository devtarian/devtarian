import React from 'react';
import styled from 'styled-components';

const CarouselBtn = ({ value, onCarouselBtnClick }) => {
  const { currentIndex, leftPosition, liClientWidth, liSideMargin } = value;

  const HandleCarouselBtnClick = (e) => {
    const liLRMargin = liSideMargin * 2;

    if (e.target.classList.contains('prev')) {
      if (currentIndex === 0) return;
      onCarouselBtnClick(currentIndex - 1, leftPosition + liLRMargin + liClientWidth);
    }

    if (e.target.classList.contains('next')) {
      if (currentIndex === 7) return;
      onCarouselBtnClick(currentIndex + 1, leftPosition - liLRMargin - liClientWidth);
    }
  };

  return (
    <CarouselBtnWrap>
      <button className="prev" onClick={HandleCarouselBtnClick}>
        <span>&lt;</span>
      </button>
      <button className="next" onClick={HandleCarouselBtnClick}>
        <span>&gt;</span>
      </button>
    </CarouselBtnWrap>
  );
};

export default React.memo(CarouselBtn);

export const CarouselBtnWrap = styled.div`
  position: relative;
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
    left: 3px;
  }
  .next {
    z-index: 110;
    right: 3px;
  }
  span {
    pointer-events: none;
  }
`;
