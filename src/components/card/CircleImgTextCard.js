import React, { forwardRef } from 'react';
import styled from 'styled-components';
import FavoriteHeart, { FavoriteWrap, EmptyHeart } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';

const CircleImgTextCard = forwardRef((props, ref) => {
  const { data } = props;

  return (
    <Wrap key={data.id} ref={ref}>
      <div className="imgInfo">
        <img src={data.files[0] ? URL.createObjectURL(data.files[0]) : noImg} alt="" />
        <div className="cover"></div>
      </div>
      <div className="itemInfo">
        <span className="category">{data.category}</span>
        <h3>{data.product}</h3>
        <span className="ingredient">{data.ingredient}</span>
      </div>
      <FavoriteHeart data={data} />
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

  ${FavoriteWrap} {
    top: 10px;
    right: 10px;
  }
  ${EmptyHeart} {
    fill: ${(props) => props.theme.color[2]};
  }
`;
