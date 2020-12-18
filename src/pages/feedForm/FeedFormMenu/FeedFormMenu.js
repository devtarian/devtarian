import React, { useState } from 'react';
import styled from 'styled-components';

import { Input, Select } from '../../../components/form';
import { changeNumberWithComma } from '../../../utils/helper';
const initialValue = {
  name: '',
  veganLevel: '락토',
  price: '',
};
const FeedFormMenu = ({ inputs, setInputs }) => {
  const [menu, setMenu] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu({
      ...menu,
      [name]: value,
    });
  };
  const handleClickAdd = () => {
    if (!menu.name || !menu.price) {
      return alert('빈칸을 작성해주세요.');
    }

    setInputs((state) => ({
      ...state,
      menus: [...state.menus, menu],
    }));
    setMenu(initialValue);
  };

  const handleClickDelete = (deleteIdx) => {
    setInputs((state) => ({
      ...state,
      menus: state.menus.filter((_, idx) => idx !== deleteIdx),
    }));
  };

  return (
    <Wrap className="wrap">
      <FormRow>
        <div className="col">
          <StyledSelect
            label="채식 단계"
            name="veganLevel"
            value={menu.veganLevel}
            onChange={handleChange}
            options={[
              { key: 'vegan', title: '비건' },
              { key: 'lacto ', title: '락토' },
              { key: 'ovo', title: '오보' },
              { key: 'lacto-ovo', title: '락토오보' },
              { key: 'pesco', title: '페스코' },
            ]}
          />
        </div>
        <div className="col">
          <Input
            label="음식명"
            name="name"
            value={menu.name || ''}
            placeholder="음식 이름을 적어주세요."
            onReviewChange={handleChange}
          />
        </div>

        <div className="col">
          <Input
            label="가격"
            name="price"
            value={menu.price || ''}
            placeholder="가격을 적어주세요."
            onReviewChange={handleChange}
          />
        </div>

        <AddMenuBtn type="button" onClick={handleClickAdd} />
      </FormRow>

      {!inputs.menus.length && (
        <MenuCard>
          <div>메뉴를 추가해주세요.</div>
        </MenuCard>
      )}
      <CardList>
        {inputs.menus.map((item, idx) => (
          <MenuCard key={idx}>
            <div>
              <h2>{item.name}</h2>
              <span>{item.veganLevel}</span>
            </div>
            <div>
              {changeNumberWithComma(item.price)} 원
              <button className="btn-delete" type="button" onClick={() => handleClickDelete(idx)}>
                삭제
              </button>
            </div>
          </MenuCard>
        ))}
      </CardList>
    </Wrap>
  );
};

export default FeedFormMenu;

const Wrap = styled.div`
  h2 {
    margin: 0px !important;
    padding: 0px !important;
  }
`;

const FormRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 40px;

  .col {
    flex: 1px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const AddMenuBtn = styled.button`
  position: relative;
  bottom: 0px;
  display: block;
  width: 40px;

  &:after {
    content: '+';
    position: absolute;
    bottom: 0px;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.green[2]};
    text-align: center;
    line-height: 34px;
    font-size: 2rem;
    color: white;
  }
`;

const StyledSelect = styled(Select)`
  margin-top: 2rem;
`;

const CardList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuCard = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  height: 120px;
  color: ${(props) => props.theme.gray[1]};
  padding: 30px;
  box-shadow: ${(props) => props.theme.gray[0]} 0px 1px 6px 0px;
  margin-bottom: 20px;
  font-size: 1.1rem;

  h2 {
    font-size: 1.4rem !important;
    margin: 0px 0 5px !important;
    padding: 0px !important;
  }
  span {
    display: inline-block;
    background: ${(props) => props.theme.brown[2]};
    font-size: 1rem;
    font-weight: normal;
    color: white;
    width: 50px;
    text-align: center;
    border-radius: 10%;
    margin-bottom: 5px;
  }

  .btn-delete {
    margin-left: 20px;
    height: 40px;
    width: 60px;
    color: white;
    background: ${(props) => props.theme.gray[0]};
    border-radius: 10%;
    &:hover {
      background-color: ${(props) => props.theme.green[0]};
    }
  }
`;
