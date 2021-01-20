import styled from 'styled-components';
import Search, { SearchWrap, InnerWrap } from '../search/Search';

const SearchModal = ({ onShowModal }) => {
  const handleShowModal = (modal) => {
    onShowModal(modal);
  };

  return (
    <Wrap>
      <Search />
      <CloseBtn onClick={() => handleShowModal('')}></CloseBtn>
    </Wrap>
  );
};

export default SearchModal;

const Wrap = styled.section`
  z-index: 10001;
  background: ${(props) => props.theme.background[0]};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${SearchWrap} {
    background: none;
  }
  ${InnerWrap} {
    top: 80px;
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 11px;
  height: 11px;
  background: ${(props) => `url(${props.theme.svg.close})`} center center / contain no-repeat;
`;
