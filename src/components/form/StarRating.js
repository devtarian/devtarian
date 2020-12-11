import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { svg } from '../../config/config';

const ratedTextMap = {
  0.0: '평가하기',
  0.5: '최악이에요',
  1.0: '실망이에요',
  1.5: '맛없어요',
  2.0: '별로에요',
  2.5: '그냥그래요',
  3.0: '평범해요',
  3.5: '괜찮아요',
  4.0: '맛있어요',
  4.5: '훌륭해요!',
  5.0: '최고에요!',
};

const StarRating = ({ name, onReviewChange }) => {
  const [fetchedRate, setFetchedRate] = useState(0.0);
  const [rate, setRate] = useState(0);
  const starsWidth = 150;
  const oneStarWidth = starsWidth / 5;

  useEffect(() => {
    setRate(fetchedRate);
  }, [fetchedRate]);

  const handleMouseMove = (e) => {
    setRate((Math.floor((e.nativeEvent.layerX / oneStarWidth) * 2) + 1) / 2);
  };

  const handleMouseLeave = () => {
    setRate(fetchedRate || 0);
  };

  const handleClick = (e) => {
    setFetchedRate(rate);
    onReviewChange(e);
  };

  const Star = ({ isRated }) => {
    return <li className={`${isRated ? 'starRated' : 'star'}`} name={name} value={rate}></li>;
  };

  return (
    <Wrap className="wrap" rate={rate} starsW={starsWidth} oneStarW={oneStarWidth} svg={svg}>
      <h3>별점</h3>
      <div className="innerWrap">
        <ul className="stars" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick}>
          {[...new Array(5)].map((_, index) => (
            <Star key={index} />
          ))}
          <ul className="ratedStars">
            {[...new Array(5)].map((_, index) => (
              <Star key={index} isRated={true} />
            ))}
          </ul>
        </ul>
        <span className="text">{ratedTextMap[fetchedRate]}</span>
      </div>
    </Wrap>
  );
};

export default React.memo(StarRating);

const Wrap = styled.div`
  .innerWrap {
    position: relative;
  }
  .stars {
    width: ${(props) => props.starsW}px;
    cursor: pointer;
  }
  .ratedStars {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.rate ? props.rate * props.oneStarW + 'px' : '0')};
    overflow: hidden;
    white-space: nowrap;
  }
  .text {
    position: absolute;
    top: 6px;
    left: 162px;
    color: ${(props) => props.theme.gray[1]};
    font-size: 14px;
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
