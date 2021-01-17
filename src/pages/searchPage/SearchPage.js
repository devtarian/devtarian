import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchFilter from './SearchFilter/SearchFilter';
import ImgTextCard2 from '../../components/card/ImgTextCard2';
import SearchMap from './SearchMap/SeacrhMap';

import { useDispatch, useSelector } from 'react-redux';
import searchActions from '../../redux/actions/searchActions';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { isFetching, data, map } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchActions.getSearch());
  }, [dispatch]);

  const handleMouseOver = (store) => {
    if (!store) return;
    let { marker, imageOver, infoWindow } = store.map;
    marker.setImage(imageOver);
    infoWindow.open(map, marker);
  };

  const handleMouseOut = (store) => {
    if (!store) return;
    let { marker, imageNormal, infoWindow } = store.map;
    marker.setImage(imageNormal);
    infoWindow.close();
  };
  // if (isFetching) return null;

  return (
    <Wrap>
      <SectionContents>
        <h3>검색</h3>
        <StyledSearch width="100%" />
        <SearchFilter />

        <h3>검색결과</h3>
        <CardList>
          {data.store.map((item, idx) => (
            <StyledCard
              key={idx}
              storeData={item}
              onMouseOver={() => handleMouseOver(item)}
              onMouseOut={() => handleMouseOut(item)}
            />
          ))}
          {data.store.length === 0 && '검색결과가 없습니다.'}
        </CardList>
      </SectionContents>
      <SectionMap>
        <SearchMap data={data} />
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

const StyledCard = styled(ImgTextCard2)`
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
