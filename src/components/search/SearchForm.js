import React from 'react';
import styled from 'styled-components';

const SearchForm = ({ value, onInputChange, onAddRecentKeywords }) => {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    onAddRecentKeywords(value);
    onInputChange('');
  };

  return (
    <Wrap onSubmit={handleInputSubmit}>
      <SearchInput
        placeholder="근처의 채식 식당을 찾아보세요!"
        value={value}
        onChange={handleInputChange}></SearchInput>
      <SearchButton type="submit">검색</SearchButton>
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
  width: 826px;
  padding: 14px 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #fff;
  border: 1px solid #ededed;
`;

const SearchButton = styled.button`
  z-index: 1;
  position: absolute;
  right: 0;
  float: right;
  width: 50px;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: green;
  border: 1px solid green;
`;
