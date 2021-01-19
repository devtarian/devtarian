import React from 'react';
import styled from 'styled-components';
import history from '../../../history';
import queryString from 'query-string';

import Button from '../../../Styles/Button';
import { changeObjectToQuery, translate } from '../../../utils/helper';
import { Select } from '../../../components/form';

const VegWikiFilter = () => {
  const queryObj = queryString.parse(history.location.search);
  const { category, ...query } = queryObj;

  const handleClickCategory = (category) => {
    window.location = '/vegwiki' + changeObjectToQuery({ ...query, category });
  };

  const handleChangeUrl = (order) => {
    window.location = '/vegwiki' + changeObjectToQuery({ ...queryObj, order });
  };

  const buttonList = ['processed', 'snack', 'bakery', 'drink', 'etc'];
  const OPTIONS = ['createdAt', 'asc', 'desc'];
  return (
    <Wrap>
      <h3>카테고리</h3>
      <ButtonsWrap>
        <div>
          <Button className={(category === 'all' || !category) && 'active'} onClick={() => handleClickCategory('all')}>
            All
          </Button>

          {buttonList.map((item) => (
            <Button key={item} className={category === item && 'active'} onClick={() => handleClickCategory(item)}>
              {translate(item)}
            </Button>
          ))}
        </div>
        <StyledSelect info={OPTIONS} onChange={handleChangeUrl} />
      </ButtonsWrap>
    </Wrap>
  );
};

export default VegWikiFilter;

const Wrap = styled.div`
  position: relative;
  padding-bottom: 2rem;
  margin: 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme.gray[0]};

  h3 {
    margin-bottom: 10px;
  }
`;
const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StyledSelect = styled(Select)`
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
  height: 40px;
`;
