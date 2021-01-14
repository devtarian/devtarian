import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import Search from '../../components/search/Search';
import KakaoMap from '../../components/Map/KakaoMap';
import SearchFilter from './SearchFilter/SearchFilter';
import storeData from '../../config/storeData';
import ImgTextCard2 from '../../components/card/ImgTextCard2';

const map = {
  식당: {
    key: 'restaurant',
    color: '#2b8a3e',
  },
  카페: {
    key: 'cafe',
    color: '#e08d60',
  },
  베이커리: {
    key: 'bakery',
    color: '#88dde6',
  },
  Bar: {
    key: 'bar',
    color: '#868e96',
  },
  기타: {
    key: 'etc',
    color: '#37b24d',
  },
};
const SearchPage = () => {
  return (
    <Wrap>
      <SectionContents>
        <h3>검색</h3>
        <StyledSearch width="100%" />
        <SearchFilter />

        <h3>검색결과</h3>
        <CardList>
          {storeData.map((item) => (
            <StyledCard storeData={item} config={map[item.info.category]} />
          ))}
        </CardList>
      </SectionContents>
      <SectionMap>
        <StyledMap defaultCenter={{ lat: 33.450701, lng: 126.570667 }} />
      </SectionMap>
    </Wrap>
  );
};

export default SearchPage;

const Wrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

const StyledSearch = styled(Search)`
  height: auto;
  margin-bottom: 10px;
`;

const SectionContents = styled.div`
  width: 50%;
  height: 100vh;
  overflow: scroll;
  padding: 20px;

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

const StyledMap = styled(KakaoMap)`
  position: absolute;
  width: 100%;
  height: 100%;
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
