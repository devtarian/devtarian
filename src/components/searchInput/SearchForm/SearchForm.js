import React from 'react';
import styled from 'styled-components';
import history from '../../../history';
import queryString from 'query-string';
import { changeObjectToQuery } from '../../../utils/helper';

const SearchForm = ({ value, onInputChange, onAddRecentKeywords }) => {
  const { q, ...query } = queryString.parse(history.location.search);
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  const handleInputClick = (e) => {
    e.preventDefault();
    var ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(value, (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const lat = data[0].y;
        const lng = data[0].x;
        window.location = `/search${changeObjectToQuery({
          ...query,
          q: value,
          lat,
          lng,
        })}`;
      } else {
        window.location = `/search?q=${value}&lat=37.573&lng=126.9794&range=0`;
      }
    });
    onAddRecentKeywords(value);
    onInputChange('');
  };

  return (
    <Wrap>
      <SearchInput
        placeholder={q ? q + ' 검색결과' : '근처의 채식 식당을 찾아보세요!'}
        value={value}
        data-show="show"
        onChange={handleInputChange}></SearchInput>
      <SearchButton type="submit" data-show="show" onClick={handleInputClick}>
        검색
      </SearchButton>
    </Wrap>
  );
};

export default SearchForm;

const Wrap = styled.form`
  position: relative;
  height: 50px;
`;

const SearchInput = styled.input`
  z-index: 1;
  position: absolute;
  float: left;
  width: 100%;
  padding: 14px 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.background[0]};
  border: 1px solid ${(props) => props.theme.gray[1]};
`;

const SearchButton = styled.button`
  z-index: 1;
  position: absolute;
  right: 0;
  float: right;
  width: 50px;
  height: 103%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${(props) => props.theme.green[1]};
  color: ${(props) => props.theme.background[0]};
`;
