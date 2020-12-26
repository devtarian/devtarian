import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as EmptyHeartSvg } from '../../icons/heart_border-black.svg';
import { ReactComponent as FullHeartSvg } from '../../icons/heart-black.svg';

const CircleImgTextCard = forwardRef((props, ref) => {
  const { data } = props;
  const [favorites, setFavorites] = useState(false);

  const handleFavoriteBtnClick = () => {
    setFavorites(!favorites);
  };

  const renderHeart = () => {
    return favorites ? <FullHeart /> : <EmptyHeart />;
  };

  return (
    <Wrap key={data.id} ref={ref}>
      <div className="imgInfo">
        <img src={data.imgFileURL} alt="" />
        <div className="cover"></div>
      </div>
      <div className="itemInfo">
        <span className="category">{data.category}</span>
        <h3>{data.product}</h3>
        <span className="ingredient">{data.ingredient}</span>
      </div>
      <button className="favorite" onClick={handleFavoriteBtnClick}>
        {renderHeart()}
      </button>
    </Wrap>
  );
});

export default CircleImgTextCard;

const Wrap = styled.li`
  background: ${(props) => props.theme.background[1]};
  position: relative;
  float: left;
  width: 270px;
  height: 300px;
  margin: 0 10px 40px;
  border-radius: 10px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

  .imgInfo {
    &:hover .cover {
      opacity: 0.8;
    }
    img {
      display: block;
      width: 140px;
      height: 140px;
      margin: 34px auto 10px;
      border-radius: 50%;
    }
    .cover {
      z-index: 100;
      position: absolute;
      top: 0;
      width: 270px;
      height: 300px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.green[1]};
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
  }
  .itemInfo {
    width: 100%;
    text-align: center;
    h3 {
      margin-top: 0.15rem;
      font-size: 20px;
    }
    span {
      display: block;
    }
    .category {
      margin-top: 0.7rem;
      font-size: 0.85rem;
      color: ${(props) => props.theme.color[1]};
    }
    .ingredient {
      margin-top: 0.7rem;
    }
  }
`;

const EmptyHeart = styled(EmptyHeartSvg)`
  z-index: 1000;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.color[2]};

  &:hover {
  }
`;

const FullHeart = styled(FullHeartSvg)`
  z-index: 1000;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.brown[2]};

  &:hover {
  }
`;
