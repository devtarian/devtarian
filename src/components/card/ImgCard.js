import React, { forwardRef } from 'react';
import styled from 'styled-components';
import history from '../../history';
import FavoriteHeart, { FavoriteWrap } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';
import { translate } from '../../utils/helper';
import useMoreContent from '../../hooks/useMoreContent';

const ImgCard = forwardRef(({ data, value, onFavoriteClick }, ref) => {
  const { content } = useMoreContent(data.product, 7);

  const handleCardClick = (e) => {
    history.push(`/wikiDetail/${data.id}`);
  };

  return (
    <Wrap value={value}>
      <ImgCardWrap ref={ref} onClick={handleCardClick}>
        <img src={data.imgUrl ? data.imgUrl : noImg} alt="" />
        <div className="cover">
          <div className="itemInfo">
            <span>{translate(data.category)}</span>
            <h3>{content}</h3>
          </div>
        </div>
      </ImgCardWrap>
      <FavoriteHeart favorite={data.favorite} onFavoriteClick={onFavoriteClick} />
    </Wrap>
  );
});

export default ImgCard;

const Wrap = styled.li`
  position: relative;
  float: left;
  width: 270px !important;
  height: 300px;
  margin: 0 ${(props) => props.value.liSideMargin}px;
  cursor: pointer;

  ${FavoriteWrap} {
    top: 10px;
    right: 10px;
  }
`;
const ImgCardWrap = styled.div`
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    color: ${(props) => props.theme.background[0]};
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
`;
