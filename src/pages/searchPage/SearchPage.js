import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Search, { SearchWrap, InnerWrap } from '../../components/search/Search';
import SearchFilter from './searchFilter/SearchFilter';
import ImgTextCard from '../../components/card/ImgTextCard';
import SearchMap from './searchMap/SeacrhMap';

import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../redux/actions';
import useObserver from '../../hooks/useObserver';
import history from '../../history';
import Loading from '../../components/loading/Loding';

const SearchPage = () => {
  const mapRef = useRef();
  const dispatch = useDispatch();
  const { isFetching, data, map, fetchMore } = useSelector((state) => state.search);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleFetchMore = () => {
    if (!fetchMore) return;
    dispatch(searchActions.getSeach());
  };
  const handleMouseOver = useCallback(
    (store) => {
      if (!store) return;
      let { marker, imageOver, infoWindow } = store.mapData;
      marker.setImage(imageOver);
      infoWindow.open(map, marker);
    },
    [map]
  );

  const handleMouseOut = useCallback((store) => {
    if (!store) return;
    let { marker, imageNormal, infoWindow } = store.mapData;
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
    const mapElem = mapRef.current;
    if (!mapElem) return;
    dispatch(searchActions.getSeach(mapElem));
  }, [dispatch, mapRef]);

  if (isFetching && map) return <Loading />;

  return (
    <Wrap>
      <SectionContents>
        <h3>검색</h3>
        <Search />
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
        <SearchMap ref={mapRef} />
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

  ${SearchWrap} {
    margin-bottom: 10px;
  }
  ${InnerWrap} {
    top: 0;
    width: 100%;
  }
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
`;

const StyledCard = styled(ImgTextCard)`
  width: 32%;
  margin-bottom: 20px;
  margin-right: 1%;
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
