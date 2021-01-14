import React, { forwardRef } from 'react';
import styled from 'styled-components';
import FavoriteHeart, { FavoriteWrap, EmptyHeart } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';
import { translate } from '../../utils/helper';

const ImgCard = forwardRef((props, ref) => {
  const { data, value } = props;

  return (
    <ImgCardWrap value={value} ref={ref}>
      <img src={data.files[0] ? URL.createObjectURL(data.files[0]) : noImg} alt="" />
      <div className="cover">
        <div className="itemInfo">
          <span>{translate(data.category)}</span>
          <h3>{data.product}</h3>
        </div>
      </div>
      <FavoriteHeart data={data} />
    </ImgCardWrap>
  );
});

export default ImgCard;

export const ImgCardWrap = styled.li`
  position: relative;
  float: left;
  width: 270px;
  margin: 0 ${(props) => props.value.liSideMargin}px 40px;
  img {
    width: 270px;
    height: 300px;
    border-radius: 10px;
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

    .itemInfo {
      position: absolute;
      top: 40%;
      width: 100%;
      text-align: center;
      h3 {
        margin-top: 0.4rem;
        font-size: 20px;
      }
    }
  }
  &:hover .cover {
    opacity: 0.8;
  }

  ${FavoriteWrap} {
    top: 10px;
    right: 10px;
  }
  ${EmptyHeart} {
    fill: ${(props) => props.theme.color[2]};
  }
`;
