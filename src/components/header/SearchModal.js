import styled from 'styled-components';
import SearchInput from '../searchInput/SearchInput';

const SearchModal = ({ onShowModal }) => {
  const handleShowModal = (modal) => {
    onShowModal(modal);
  };
  return (
    <Wrap>
      <SearchCategory>
        <li>
          <a href="/">전체</a>
        </li>
        <li>
          <a href="/">식당</a>
        </li>
        <li>
          <a href="/">제품</a>
        </li>
      </SearchCategory>
      <SearchInput posTop="80px" bg="none" />
      <CloseBtn onClick={() => handleShowModal('')}>
        <i>x</i>
      </CloseBtn>
    </Wrap>
  );
};

export default SearchModal;

const Wrap = styled.section`
  z-index: 10;
  background: ${(props) => props.theme.background[0]};
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
      color: ${(props) => props.theme.green[1]};
      font-weight: bolder;
    }
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 10px;
  right: 20px;
  width: 16px;
  height: 16px;

  i {
    font-size: 22px;
  }
`;
