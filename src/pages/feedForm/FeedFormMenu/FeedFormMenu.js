import React from 'react';
import styled from 'styled-components';

import { Input, InputSelect } from '../../../components/form';
import useInput from '../../../hooks/useInput';
import { changeNumberWithComma, translate } from '../../../utils/helper';
const initialValue = {
  menu: '',
  vegtype: 'vegan',
  price: '',
};
const FeedFormMenu = ({ inputs, setInputs, errors, setErrors }) => {
  const {
    inputs: menuList,
    setInputs: setMenu,
    errors: menuErrors,
    onInputChange: onChangeMenu,
    requiredValidate,
  } = useInput(initialValue);

  const handleClickAdd = () => {
    const requiredList = ['menu', 'price'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    setInputs({
      ...inputs,
      menuList: [...inputs.menuList, menuList],
    });
    setMenu(initialValue);
    setErrors((state) => ({ ...state, menuList: '' }));
  };

  const handleClickDelete = (deleteIdx) => {
    setMenu({
      ...inputs,
      menuList: inputs.menuList.filter((_, idx) => idx !== deleteIdx),
    });
  };

  return (
    <Wrap className="wrap">
      <FormRow>
        <div className="col">
          <StyledSelect
            label="채식 단계"
            name="vegtype"
            value={menuList.vegtype}
            onChange={onChangeMenu}
            options={['vegan', 'lacto', 'ovo', 'lacto-ovo', 'pesco']}
          />
        </div>
        <div className="col">
          <Input
            label="메뉴명"
            name="menu"
            value={menuList.menu || ''}
            placeholder="메뉴명을 적어주세요."
            onChange={onChangeMenu}
            error={menuErrors.menu}
          />
        </div>

        <div className="col">
          <Input
            label="가격"
            name="price"
            value={menuList.price || ''}
            placeholder="가격을 적어주세요."
            onChange={onChangeMenu}
            error={menuErrors.price}
          />
        </div>
        <AddMenuBtn type="button" onClick={handleClickAdd} />
      </FormRow>

      {!inputs.menuList.length && (
        <MenuCard>
          <div>메뉴를 추가해주세요.</div>
          <p className={errors.menuList ? 'err on' : 'err'}>{errors.menuList}</p>
        </MenuCard>
      )}
      <CardList>
        {inputs.menuList.map((item, idx) => (
          <MenuCard key={idx}>
            <div>
              <h3>
                {item.menu}
                <span>{translate(item.vegtype)}</span>
              </h3>
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

const StyledSelect = styled(InputSelect)`
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
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  height: 80px;
  color: ${(props) => props.theme.color[0]};
  padding: 30px;
  border: 1px solid ${(props) => props.theme.gray[1]};
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.gray[0]} 0px 2px 2px 0px;
  margin-bottom: 15px;
  font-size: 1.1rem;

  h3 {
    margin: 0px 0 5px !important;
    padding: 0px !important;
  }
  span {
    display: inline-block;
    background: ${(props) => props.theme.brown[2]};
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme.background[0]};
    width: 50px;
    text-align: center;
    border-radius: 10%;
    margin-bottom: 5px;
    margin-left: 10px;
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

  .err {
    display: none;
    position: absolute;
    top: 90px;
    font-size: 11px;
    color: ${(props) => props.theme.brown[1]};
  }
  .err.on {
    display: block;
  }
`;
