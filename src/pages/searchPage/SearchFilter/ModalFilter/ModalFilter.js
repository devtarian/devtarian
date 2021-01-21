import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import history from '../../../../history';
import Modal from '../../../../components/common/Modal';
import Button from '../../../../styles/Button';
import { changeObjectToQuery } from '../../../../utils/helper';
import FilterButtons from './filterButtons.js/FilterButtons';

const INITIAL_VALUE = {
  category: 'all',
  vegType: 'vegan',
  order: 'distance',
  size: 10,
};

const ModalFilter = ({ onCloseModal }) => {
  const [filter, setFilter] = useState(INITIAL_VALUE);

  useEffect(() => {
    const query = queryString.parse(history.location.search);
    setFilter((state) => ({
      ...state,
      ...query,
    }));
  }, []);

  const handleChangeFilter = useCallback((name, value) => {
    setFilter((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleClickApply = () => {
    window.location = `/search${changeObjectToQuery(filter)}`;
    onCloseModal();
  };

  const handleClickReset = () => {
    setFilter((state) => ({ ...state, ...INITIAL_VALUE }));
    const newQuery = changeObjectToQuery({ ...filter, ...INITIAL_VALUE });
    window.location = `/search${newQuery}`;
    onCloseModal();
  };

  return (
    <StyledModal width="700px" height="500px" onCloseModal={onCloseModal}>
      <div className="title">
        <h3>필터</h3>
        <div className="title-buttons">
          <Button onClick={handleClickReset}>초기화</Button>
          <Button onClick={onCloseModal}>취소</Button>
          <Button type="green" onClick={handleClickApply}>
            적용
          </Button>
        </div>
      </div>

      <FilterButtons
        title="검색 카테고리"
        type="category"
        value={filter.category}
        onChangeFilter={handleChangeFilter}
      />
      <FilterButtons title="비건 옵션" type="vegType" value={filter.vegType} onChangeFilter={handleChangeFilter} />
      <FilterButtons title="정렬" type="order" value={filter.order} onChangeFilter={handleChangeFilter} />
      <FilterButtons title="개수" type="size" value={filter.size} onChangeFilter={handleChangeFilter} />
    </StyledModal>
  );
};

export default ModalFilter;

const StyledModal = styled(Modal)`
  .title {
    margin-top: 10px;
    border-bottom: 1px solid ${(props) => props.theme.gray[0]};

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .title-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  h4 {
    margin-top: 10px;
    padding-bottom: 10px;
  }
`;
