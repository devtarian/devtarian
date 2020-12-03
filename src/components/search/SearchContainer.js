import styled from 'styled-components';
import SearchForm from './SearchForm';
import RecentKeyword from './RecentKeyword';

const SearchContainer = ({ paddingTop, background }) => {
  return (
    <SearchWrap background={background}>
      <SearchInnerWrap paddingTop={paddingTop}>
        <SearchForm />
        <RecentKeyword />
      </SearchInnerWrap>
    </SearchWrap>
  );
};

export default SearchContainer;

const SearchWrap = styled.div`
  height: 420px;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
`;

const SearchInnerWrap = styled.div`
  position: relative;
  width: 876px;
  max-height: 239px;
  margin: 0 auto;
  padding-top: ${(props) => props.paddingTop};
`;
