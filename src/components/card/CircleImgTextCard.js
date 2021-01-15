import React, { forwardRef } from 'react';
import styled from 'styled-components';
import FavoriteHeart, { FavoriteWrap, EmptyHeart } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';
import { translate } from '../../utils/helper';

const CircleImgTextCard = forwardRef((props, ref) => {
  const { cardData } = props;

  return (
    <CircleCardWrap key={cardData.id} ref={ref}>
      <div className="imgInfo">
        <img src={cardData.files[0] ? URL.createObjectURL(cardData.files[0]) : noImg} alt="" />
        <div className="cover"></div>
      </div>
      <div className="itemInfo">
        <span className="category">{translate(cardData.category)}</span>
        <h3>{cardData.product}</h3>
        <span className="ingredient">{cardData.ingredient}</span>
      </div>
      <FavoriteHeart data={cardData} />
    </CircleCardWrap>
  );
});

export default CircleImgTextCard;

export const CircleCardWrap = styled.li`
  background: ${(props) => props.theme.background[1]};
  position: relative;
  float: left;
  width: 270px;
  height: 300px;
  margin: 0 0.8rem 1.4rem;
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
      width: 100%;
      height: 100%;
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

  ${FavoriteWrap} {
    top: 10px;
    right: 10px;
  }
  ${EmptyHeart} {
    fill: ${(props) => props.theme.color[2]};
  }
`;
