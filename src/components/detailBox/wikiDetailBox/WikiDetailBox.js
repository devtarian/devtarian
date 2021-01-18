import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import wikiDetailActions from '../../../redux/actions/wikiDetailActions';
import Loading from '../../../components/loading/Loding';
import ImgBox from '../ImgBox';
import WikiTextBox from './WikiTextBox';
import FavoriteHeart, { FavoriteWrap } from '../../favoriteHeart/FavoriteHeart';

const WikiDetailBox = ({ wikiId }) => {
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector((state) => state.wikiDetail);
  const { category, product, favorite } = data;

  useEffect(() => {
    dispatch(wikiDetailActions.getWikiDetail(wikiId));
  }, [dispatch, wikiId]);

  if (isFetching) return <Loading />;

  const onFavoriteClick = () => {
    favorite ? dispatch(wikiDetailActions.unFavoriteWiki(wikiId)) : dispatch(wikiDetailActions.favoriteWiki(wikiId));
  };

  return (
    <Wrap>
      <div className="show">
        <span className="category">{category}</span>
        <h2 className="product">{product}</h2>
      </div>
      <ImgBox data={data} />
      <WikiTextBox wiki={data} wikiId={wikiId} />
      <div className="heartWrap">
        <FavoriteHeart onFavoriteClick={onFavoriteClick} favorite={favorite} />
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
    .product {
      margin: 0px 0px 10px;
      font-size: 60px;
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
