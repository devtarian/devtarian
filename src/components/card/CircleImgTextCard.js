import React, { forwardRef, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { wikiActions } from '../../redux/actions';
import history from '../../history';
import FavoriteHeart, { FavoriteWrap } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';
import { translate } from '../../utils/helper';
import useMoreContent from '../../hooks/useMoreContent';

const CircleImgTextCard = forwardRef(({ data, isLoggedIn }, ref) => {
  const dispatch = useDispatch();
  const { id, imgUrl, category, product, ingredient, favorite } = data;
  const refFavorite = useRef(null);
  const productShorthand = useMoreContent(product, 8);
  const ingredientShorthand = useMoreContent(ingredient, 10);

  const handleCardClick = (e) => {
    if (e.target === refFavorite.curent) return;

    history.push(`/wikiDetail/${id}`);
  };

  const handleClickFavorite = useCallback(() => {
    if (!isLoggedIn) {
      window.location = '/login';
    }
    favorite ? dispatch(wikiActions.unFavoriteWiki(id)) : dispatch(wikiActions.favoriteWiki(id));
  }, [isLoggedIn, dispatch, id, favorite]);

  return (
    <Wrap>
      <CircleCardWrap key={id} ref={ref} onClick={handleCardClick}>
        <div className="imgInfo">
          <img src={imgUrl ? imgUrl : noImg} alt="" />
          <div className="cover"></div>
        </div>
        <div className="itemInfo">
          <span className="category">{translate(category)}</span>
          <h3>{productShorthand.content}</h3>
          <span className="ingredient">{ingredientShorthand.content}</span>
        </div>
      </CircleCardWrap>
      <FavoriteHeart favorite={favorite} onFavoriteClick={handleClickFavorite} />
    </Wrap>
  );
});

export default CircleImgTextCard;

const Wrap = styled.div`
  position: relative;
  float: left;
  width: 23%;
  height: 300px;
  padding: 0 1.2rem;
  margin: 0 1% 1.4rem;
  background: ${(props) => props.theme.background[1]};
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  ${FavoriteWrap} {
    top: 10px;
    right: 10px;
  }
`;
export const CircleCardWrap = styled.div`
  cursor: pointer;
  width: 100% !important;
  .imgInfo {
    width: 140px;
    height: 140px;
    margin: 0 auto;
    &:hover .cover {
      opacity: 0.8;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 34px 0 10px;
      border-radius: 50%;
    }
    .cover {
      z-index: 100;
      position: absolute;
      top: 0;
      left: 0;
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
`;
