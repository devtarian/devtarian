import React from 'react';
import styled from 'styled-components';
import Search from '../../components/search/Search';
import KakaoMap from '../../components/Map/KakaoMap';
import SearchFilter from './SearchFilter/SearchFilter';
import storeData from '../../config/storeData';
import ImgTextCard2 from '../../components/card/ImgTextCard2';
import SearchMap from './SearchMap/SeacrhMap';

const SearchPage = () => {
  return (
    <Wrap>
      <SectionContents>
        <h3>검색</h3>
        <StyledSearch width="100%" />
        <SearchFilter />

        <h3>검색결과</h3>
        <CardList>
          {storeData.map((item, idx) => (
            <StyledCard key={idx} storeData={item} />
          ))}
        </CardList>
      </SectionContents>
      <SectionMap>
        {/* <StyledMap defaultCenter={{ lat: 33.450701, lng: 126.570667 }} /> */}
        <SearchMap data={storeData} />
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

const StyledSearch = styled(Search)`
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

const StyledMap = styled(KakaoMap)`
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
