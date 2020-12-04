import styled from 'styled-components';
import Search from '../search/Search';
import CloseBtn from '../closeBtn/CloseBtn';

const SearchModal = ({ recentKeywords, onAddRecentKeywords, onToggleShow }) => {
  return (
    <Wrap>
      <SearchCategory>
        <li>
          <a href="">전체</a>
        </li>
        <li>
          <a href="">식당</a>
        </li>
        <li>
          <a href="">제품</a>
        </li>
      </SearchCategory>
      <Search posTop="80px" bg="none" recentKeywords={recentKeywords} onAddRecentKeywords={onAddRecentKeywords} />
      <CloseBtn onToggleShow={onToggleShow} />
    </Wrap>
  );
};

export default SearchModal;

const Wrap = styled.section`
  z-index: 10;
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const SearchCategory = styled.ul`
  z-index: 9;
  position: fixed;
  top: 53px;
  left: 312px;
  font-size: 14px;
  font-weight: bold;

  li {
    float: left;
  }
  a {
    padding: 8px 11px;

    &:hover {
      transition: all 0.2s ease;
      color: green;
      font-weight: bolder;
    }
  }
`;
