import styled from 'styled-components';

const SearchForm = () => {
  return (
    <SearchFormWrap>
      <SearchInput placeholder="근처의 채식 식당을 찾아보세요!"></SearchInput>
      <SearchButton>검색</SearchButton>
    </SearchFormWrap>
  );
};

export default SearchForm;

const SearchFormWrap = styled.div`
  width: 876px;
  height: 50px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 826px;
  padding: 14px 10px;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  float: left;
`;

const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  float: right;
  background-color: green;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
