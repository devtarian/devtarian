import React, { useState } from 'react';
import styled from 'styled-components';
import history from '../../../history';
import queryString from 'query-string';

import Button from '../../../styles/Button';
import Svg from '../../../components/common/Svg';
import ModalFilter from './modalFilter/ModalFilter';
import { changeObjectToQuery, translate } from '../../../utils/helper';
import filterConfig from '../../../config/filterConfig';

const SearchFilter = () => {
  const { category, ...query } = queryString.parse(history.location.search);

  const [modal, setModal] = useState('');

  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);
  const handleClickCategory = (category) => {
    window.location = changeObjectToQuery({ ...query, category });
  };

  const buttonList = ['restaurant', 'cafe', 'bakery', 'bar', 'etc'];

  return (
    <>
      <Wrap>
        <Button onClick={handleOpenModal} bg="#2f9e44">
          <Svg type="filter" w="20px" h="20px" color="white" onClick={handleOpenModal} />
        </Button>
        <Button className={(category === 'all' || !category) && 'active'} onClick={() => handleClickCategory('all')}>
          All
        </Button>

        {buttonList.map((item) => (
          <Button key={item} className={category === item && 'active'} onClick={() => handleClickCategory(item)}>
            <Svg
              type={item}
              w="24px"
              h="24px"
              p="5px"
              radius="50%"
              bg={filterConfig.category[item].color}
              color="white"
            />
            <span>{translate(item)}</span>
          </Button>
        ))}
      </Wrap>

      {modal && <ModalFilter onCloseModal={handleCloseModal} />}
    </>
  );
};

export default SearchFilter;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
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
