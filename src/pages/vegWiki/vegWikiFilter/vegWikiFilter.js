import React from 'react';
import styled from 'styled-components';
import history from '../../../history';
import queryString from 'query-string';

import Button from '../../../styles/Button';
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
        <div className="col">
          <Button className={(category === 'all' || !category) && 'active'} onClick={() => handleClickCategory('all')}>
            All
          </Button>

          {buttonList.map((item) => (
            <Button key={item} className={category === item && 'active'} onClick={() => handleClickCategory(item)}>
              {translate(item)}
            </Button>
          ))}
        </div>
        <StyledSelect info={OPTIONS} sort={queryObj.order} onChange={handleChangeUrl} />
      </ButtonsWrap>
    </Wrap>
  );
};

export default VegWikiFilter;

const Wrap = styled.div`
  position: relative;
  margin: 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme.gray[0]};

  h3 {
    margin-bottom: 15px;
  }
`;
const ButtonsWrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  margin-bottom: 15px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledSelect = styled(Select)`
  display: inline-block;
  height: 35px;

  @media only screen and (max-width: 767px) {
    align-self: flex-end;
    margin-top: 10px;
  }
`;
