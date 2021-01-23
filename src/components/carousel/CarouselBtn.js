import React from 'react';
import styled from 'styled-components';
import Svg from '../common/Svg';

const CarouselBtn = ({ value, dataLength, onCarouselBtnClick, handleFetchMoreData, fetchMore }) => {
  const { currentIndex, leftPosition, liClientWidth, liSideMargin } = value;

  const HandleCarouselBtnClick = (e) => {
    const liLRMargin = liSideMargin * 2;

    if (e.target.classList.contains('prev')) {
      if (currentIndex === 0) return;
      onCarouselBtnClick(currentIndex - 1, leftPosition + liLRMargin + liClientWidth);
    }

    if (e.target.classList.contains('next')) {
      if (!fetchMore || currentIndex === dataLength - 4) return;
      onCarouselBtnClick(currentIndex + 1, leftPosition - liLRMargin - liClientWidth);
      handleFetchMoreData();
    }
  };

  return (
    <CarouselBtnWrap>
      {currentIndex !== 0 && (
        <button className="prev" onClick={HandleCarouselBtnClick}>
          <span>
            <Svg type="prevBtn" w="30px" h="30px" radius="50%" />
          </span>
        </button>
      )}
      {fetchMore && currentIndex !== dataLength - 4 && (
        <button className="next" onClick={HandleCarouselBtnClick}>
          <span>
            <Svg type="nextBtn" w="30px" h="30px" radius="50%" />
          </span>
        </button>
      )}
    </CarouselBtnWrap>
  );
};

export default React.memo(CarouselBtn);

export const CarouselBtnWrap = styled.div`
  position: relative;
  width: 100%;
  height: 177px;
  button {
    position: absolute;
    top: 43%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.background[0]};
    font-size: 20px;
    color: ${(props) => props.theme.gray[1]};
    opacity: 0.5;
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
