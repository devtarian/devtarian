import styled from 'styled-components';
import SearchForm from './SearchForm';
import RecentKeyword from './RecentKeyword';
import BackGroundImg from './images/pexels-ready-made-3850607.jpg';

const SearchContainer = () => {
  return (
    <SearchWrap>
      <SearchForm />
      {/* <RecentKeyword /> */}
    </SearchWrap>
  );
};

export default SearchContainer;

const SearchWrap = styled.div`
  height: 420px;
  padding-top: 180px;
  background-image: url(${BackGroundImg});
  background-size: cover;
  background-position: center;
`;
