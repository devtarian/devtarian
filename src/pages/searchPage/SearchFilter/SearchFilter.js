import React, { useState } from 'react';
import Button from '../../../Styles/Button';
import Svg from '../../../components/common/Svg';
import styled from 'styled-components';
import ModalFilter from './ModalFilter/ModalFilter';

const SearchFilter = () => {
  const [modal, setModal] = useState('');

  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);

  return (
    <>
      <Wrap>
        <StyledButton onClick={handleOpenModal} bg="#2f9e44">
          <Svg type="filter" color="white" />
        </StyledButton>
        <StyledButton>All</StyledButton>
        <StyledButton>
          <Svg type="restaurant" />
          <span>식당</span>
        </StyledButton>
        <StyledButton>
          <Svg type="cafe" />
          <span>카페</span>
        </StyledButton>
        <StyledButton>
          <Svg type="bakery" />
          <span>베이커리</span>
        </StyledButton>
        <StyledButton>
          <CircleSvg type="bar" />
          <span>Bar</span>
        </StyledButton>
        <StyledButton>
          <CircleSvg type="more" />
          <span>기타</span>
        </StyledButton>
      </Wrap>

      {modal && <ModalFilter onCloseModal={handleCloseModal} />}
    </>
  );
};

export default SearchFilter;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 15px;
  span {
    margin-left: 10px;
  }

  @media (max-width: 1350px) {
    span {
      display: none;
    }
  }
  @media (max-width: 991px) {
    span {
      display: inline-block;
    }
  }

  @media (max-width: 719px) {
    span {
      display: none;
    }
  }
`;

const StyledButton = styled(Button)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const CircleSvg = styled(Svg)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: red;
  padding: 5px;
`;
