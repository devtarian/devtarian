import styled from 'styled-components';
import SearchContainer from '../search/SearchContainer';
import CloseBtn from '../closeBtn/CloseBtn';

const SearchModal = ({ onToggleShow }) => {
  return (
    <SearchModalSection>
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
      <SearchContainer positionTop="80px" background="none" />
      <CloseBtn onToggleShow={onToggleShow} />
    </SearchModalSection>
  );
};

export default SearchModal;

const SearchModalSection = styled.section`
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
