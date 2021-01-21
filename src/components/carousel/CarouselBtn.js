import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PrevSvg } from '../../images/icons/arrow_left.svg';
import { ReactComponent as NextSvg } from '../../images/icons/arrow_right.svg';

const CarouselBtn = ({ value, onCarouselBtnClick }) => {
  const { currentIndex, leftPosition, liClientWidth, liSideMargin, liLength } = value;

  const HandleCarouselBtnClick = (e) => {
    const liLRMargin = liSideMargin * 2;

    if (e.target.classList.contains('prev')) {
      if (currentIndex === 0) return;
      onCarouselBtnClick(currentIndex - 1, leftPosition + liLRMargin + liClientWidth);
    }

    if (e.target.classList.contains('next')) {
      if (currentIndex === liLength) return;
      onCarouselBtnClick(currentIndex + 1, leftPosition - liLRMargin - liClientWidth);
    }
  };

  return (
    <CarouselBtnWrap>
      {currentIndex !== 0 && (
        <button className="prev" onClick={HandleCarouselBtnClick}>
          <span>
            <PrevBtn />
          </span>
        </button>
      )}
      {currentIndex !== liLength - 1 && (
        <button className="next" onClick={HandleCarouselBtnClick}>
          <span>
            <NextBtn />
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

const PrevBtn = styled(PrevSvg)`
  width: 30px;
  height: 30px;
  vertical-align: middle;
  fill: ${(props) => props.theme.gray[0]};
`;
const NextBtn = styled(NextSvg)`
  width: 30px;
  height: 30px;
  vertical-align: middle;
  fill: ${(props) => props.theme.gray[0]};
`;
