import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { wikiDetailActions } from '../../../redux/actions';
import Loading from '../../../components/loading/Loding';
import ImgBox from '../ImgBox';
import WikiTextBox from './WikiTextBox';
import FavoriteHeart, { FavoriteWrap } from '../../favoriteHeart/FavoriteHeart';
import { translate } from '../../../utils/helper';

const WikiDetailBox = ({ wikiId, isLoggedIn }) => {
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector((state) => state.wikiDetail);
  const { category, product, favorite } = data;

  useEffect(() => {
    dispatch(wikiDetailActions.getWikiDetail(wikiId));
  }, [dispatch, wikiId]);

  const handleClickFavorite = useCallback(() => {
    if (!isLoggedIn) {
      window.location = '/login';
    }
    favorite ? dispatch(wikiDetailActions.unFavoriteWiki(wikiId)) : dispatch(wikiDetailActions.favoriteWiki(wikiId));
  }, [isLoggedIn, dispatch, favorite, wikiId]);

  if (isFetching) return <Loading />;
  return (
    <Wrap>
      <div className="show">
        <span className="category">{translate(category)}</span>
        <h2 className="product">{product}</h2>
      </div>
      <ImgBox data={data} />
      <WikiTextBox wiki={data} wikiId={wikiId} />
      <div className="heartWrap">
        <FavoriteHeart favorite={favorite} onFavoriteClick={handleClickFavorite} />
      </div>
    </Wrap>
  );
};

export default WikiDetailBox;

const Wrap = styled.section`
  position: relative;

  .show {
    display: none;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    .category {
      font-size: 1rem;
      color: ${(props) => props.theme.color[2]};
    }
  }
  &:after {
    content: '';
    display: block;
    clear: both;
  }

  @media (max-width: 767px) {
    padding: 0 1.5rem;

    .show {
      display: block;
    }
    .heartWrap {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      ${FavoriteWrap} {
        top: 0px;
        right: 24px;
      }
    }
  }
`;
