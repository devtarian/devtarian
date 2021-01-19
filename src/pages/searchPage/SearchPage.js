import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchFilter from './SearchFilter/SearchFilter';
import ImgTextCard from '../../components/card/ImgTextCard';
import SearchMap from './SearchMap/SeacrhMap';

import { useDispatch, useSelector } from 'react-redux';
import searchActions from '../../redux/actions/searchActions';
import useObserver from '../../hooks/useObserver';
import history from '../../history';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { isFetching, data, map, fetchMore } = useSelector((state) => state.search);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleFetchMore = () => {
    if (!fetchMore) return;
    dispatch(searchActions.getSearch());
  };
  const handleMouseOver = useCallback(
    (store) => {
      if (!store) return;
      let { marker, imageOver, infoWindow } = store.map;
      marker.setImage(imageOver);
      infoWindow.open(map, marker);
    },
    [map]
  );

  const handleMouseOut = useCallback((store) => {
    if (!store) return;
    let { marker, imageNormal, infoWindow } = store.map;
    marker.setImage(imageNormal);
    infoWindow.close();
  }, []);

  const handleClickFavorite = useCallback(
    (store) => {
      if (!isLoggedIn) {
        history.push('/login');
      }
      store.favorite ? dispatch(searchActions.unFavorite(store.id)) : dispatch(searchActions.favorite(store.id));
    },
    [isLoggedIn, dispatch]
  );
  const ref = useObserver(handleFetchMore);

  useEffect(() => {
    dispatch(searchActions.getSearch());
  }, [dispatch]);

  if (isFetching) return null;

  return (
    <Wrap>
      <SectionContents>
        <h3>검색</h3>
        <StyledSearch width="100%" />
        <SearchFilter />

        <h3>검색결과</h3>
        <CardList>
          {data.map((item, idx) => {
            const lastEl = idx === data.length - 1;
            return (
              <StyledCard
                key={idx}
                storeData={item}
                onMouseOver={() => handleMouseOver(item)}
                onMouseOut={() => handleMouseOut(item)}
                onClickFavorite={() => handleClickFavorite(item)}
                ref={lastEl ? ref : null}
              />
            );
          })}
          {data.length === 0 && '검색결과가 없습니다.'}
        </CardList>
      </SectionContents>
      <SectionMap>
        <SearchMap />
      </SectionMap>
    </Wrap>
  );
};

export default SearchPage;

const Wrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
`;

const StyledSearch = styled(SearchInput)`
  height: auto;
  margin-bottom: 10px;
`;

const SectionContents = styled.div`
  width: 50%;
  height: 100vh;
  overflow: scroll;
  padding: 20px;
  margin: 0px;
  h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 991px) {
    width: 100%;
    overflow: hidden;
  }
`;

const SectionMap = styled.div`
  width: 50%;

  @media (max-width: 991px) {
    display: none;
  }
`;

const CardList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-lines: multiple;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const StyledCard = styled(ImgTextCard)`
  width: 32%;
  margin-bottom: 20px;

  @media (max-width: 1350px) {
    width: 49%;
  }

  @media (max-width: 1091px) {
    width: 49%;
  }

  @media (max-width: 991px) {
    width: 32%;
  }

  @media (max-width: 719px) {
    width: 49%;
  }
`;
