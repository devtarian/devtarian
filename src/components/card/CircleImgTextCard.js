import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import wikiActions from '../../redux/actions/wikiActions';
import history from '../../history';
import FavoriteHeart, { FavoriteWrap, EmptyHeart } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';
import { translate } from '../../utils/helper';

const CircleImgTextCard = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { cardData } = props;
  const { id, imgUrl, category, product, ingredient, favorite } = cardData;
  const refFavorite = useRef(null);

  const handleCardClick = (e) => {
    //  console.log(e.target, refFavorite.current.childNodes);
    if (e.target === refFavorite.curent) return;

    history.push(`/wikiDetail/${id}`);
  };

  const onFavoriteClick = () => {
    favorite ? dispatch(wikiActions.unFavoriteWiki(id)) : dispatch(wikiActions.favoriteWiki(id));
  };

  return (
    <CircleCardWrap key={id} ref={ref} onClick={handleCardClick}>
      <div className="imgInfo">
        <img src={imgUrl ? imgUrl : noImg} alt="" />
        <div className="cover"></div>
      </div>
      <div className="itemInfo">
        <span className="category">{translate(category)}</span>
        <h3>{product}</h3>
        <span className="ingredient">{ingredient}</span>
      </div>
      <FavoriteHeart onFavoriteClick={onFavoriteClick} favorite={favorite} ref={refFavorite} />
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
  cursor: pointer;

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
