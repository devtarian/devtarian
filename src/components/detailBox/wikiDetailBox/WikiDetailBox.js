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

  useEffect(() => {
    console.log('useEffect');
    dispatch(wikiDetailActions.getWikiDetail(wikiId));
    console.log('useEffect done');
  }, [dispatch, wikiId]);

  console.log('WikiDetail', data);
  if (isFetching) return <Loading />;

  const { id, category, product } = data;
  return (
    <Wrap>
      <div className="show">
        <span className="category">{category}</span>
        <h2 className="product">{product}</h2>
      </div>
      <ImgBox data={data} />
      <WikiTextBox wiki={data} wikiId={id} />
      <div className="heartWrap">
        <FavoriteHeart data={data} />
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
        right: 10px;
      }
    }
  }
`;
