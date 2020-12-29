import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { svg } from '../../config/config';

const Stars = ({ rate, starsW }) => {
  const starsWidth = starsW;
  const oneStarWidth = starsWidth / 5;

  const Star = ({ isRated }) => {
    return <li className={`${isRated ? 'starRated' : 'star'}`} value={rate}></li>;
  };

  return (
    <Wrap className="wrap" rate={rate} starsW={starsWidth} oneStarW={oneStarWidth} svg={svg}>
      <ul className="stars">
        {[...new Array(5)].map((_, index) => (
          <Star key={index} />
        ))}
        <ul className="ratedStars">
          {[...new Array(5)].map((_, index) => (
            <Star key={index} isRated={true} />
          ))}
        </ul>
      </ul>
    </Wrap>
  );
};

export default React.memo(Stars);

const Wrap = styled.div`
  position: relative;

  .stars {
    width: ${(props) => props.starsW}px;
  }
  .ratedStars {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.rate ? props.rate * props.oneStarW + 'px' : '0')};
    overflow: hidden;
    white-space: nowrap;
  }

  .star {
    display: inline-block;
    background: ${(props) => `url(${props.svg.star})`} center center / contain no-repeat;
    vertical-align: top;
    width: ${(props) => props.oneStarW}px;
    height: ${(props) => props.oneStarW}px;
  }

  .starRated {
    display: inline-block;
    background: ${(props) => `url(${props.svg.ratedStar})`} center center / contain no-repeat;
    vertical-align: top;
    width: ${(props) => props.oneStarW}px;
    height: ${(props) => props.oneStarW}px;
  }
`;
