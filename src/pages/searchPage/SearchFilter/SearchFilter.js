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
      <WrapperFilter>
        <StyledButton onClick={handleOpenModal}>
          <Svg type="filter" color="white" />
        </StyledButton>
        <Button>All</Button>
        <Button>
          <Svg type="restaurant" />
          <span>식당</span>
        </Button>
        <Button>
          <Svg type="cafe" />
          <span>카페</span>
        </Button>
        <Button>
          <Svg type="bread" />
          <span>베이커리</span>
        </Button>
        <Button>
          <Svg type="bar" />
          <span>Bar</span>
        </Button>
        <Button>
          <Svg type="more" />
          <span>식당</span>
        </Button>
      </WrapperFilter>

      {modal && <ModalFilter onCloseModal={handleCloseModal} />}
    </>
  );
};

export default SearchFilter;

const StyledButton = styled(Button)`
  background: #2f9e44;
`;

const WrapperFilter = styled.div`
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
