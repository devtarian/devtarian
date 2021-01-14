import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import Search from '../../components/search/Search';
import KakaoMap from '../../components/Map/KakaoMap';
import Button from '../../Styles/Button';

const SearchPage = ({ location }) => {
  //const [state, setState] = useState({});
  const query = queryString.parse(location.search).q;
  console.log(query);
  return (
    <Wrap>
      <SectionContents>
        <h3>검색</h3>
        <StyledSearch width="100%" />
        <Button>All</Button>
        <Button>식당</Button>
        <Button>카페</Button>
        <Button>베이커리</Button>
        <Button>Bar</Button>
        <Button>기타</Button>
        <div></div>
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
