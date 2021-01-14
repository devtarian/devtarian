import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import Search from '../../components/search/Search';
import KakaoMap from '../../components/Map/KakaoMap';
import SearchFilter from './SearchFilter/SearchFilter';

const SearchPage = ({ location }) => {
  //const [state, setState] = useState({});
  const query = queryString.parse(location.search).q;
  console.log(query);
  return (
    <Wrap>
      <SectionContents>
        <h3>검색</h3>
        <StyledSearch width="100%" />
        <SearchFilter />
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
  margin-left: 20px;
`;

const StyledSearch = styled(Search)`
  height: auto;
  margin-bottom: 10px;
  padding-right: 20px;
`;

const SectionContents = styled.div`
  width: 50%;
  height: 100vh;
  overflow: scroll;

  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 991px) {
    width: 100%;
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
