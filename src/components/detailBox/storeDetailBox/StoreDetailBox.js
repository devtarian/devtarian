import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import storeActions from '../../../redux/actions/storeActions';
import ImgBox from '../ImgBox';
import StoreTextBox from './StoreTextBox';
import FavoriteHeart, { FavoriteWrap } from '../../favoriteHeart/FavoriteHeart';
import { translate } from '../../../utils/helper';

const StoreDetailBox = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store.data);
  const {
    id,
    favorite,
    info: { category, vegType, storeName },
  } = store;

  const handleClickFavorite = useCallback(() => {
    if (!isLoggedIn) {
      window.location = '/login';
    }

    favorite ? dispatch(storeActions.unFavoriteStore(id)) : dispatch(storeActions.favoriteStore(id));
  }, [isLoggedIn, dispatch, favorite, id]);

  return (
    <Wrap>
      <div className="show">
        <div className="tags">
          <span className="storeCategory hide">{translate(category)}</span>
          <span className="vegType hide">{translate(vegType)}</span>
        </div>
        <h2 className="store">{storeName}</h2>
      </div>
      <ImgBox data={store.info} />
      <StoreTextBox storeData={store} />
      <div className="heartWrap">
        <FavoriteHeart favorite={favorite} onFavoriteClick={handleClickFavorite} />
      </div>
    </Wrap>
  );
};

export default StoreDetailBox;

const Wrap = styled.section`
  position: relative;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
  .show {
    display: none;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .tags {
    overflow: hidden;

    .vegType {
      float: left;
      max-width: 80px;
      padding: 1px 4px;
      margin-left: 0.4rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.brown[1]};
      text-align: center;
      font-size: 13px;
      color: ${(props) => props.theme.brown[1]};
    }
    .storeCategory {
      float: left;
      max-width: 70px;
      padding: 1px 4px;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.color[1]};
      text-align: center;
      font-size: 13px;
      color: ${(props) => props.theme.color[1]};
    }
  }
  .store {
    margin: 0px 0px 10px;
    font-size: 60px;
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
