import React from 'react';
import styled from 'styled-components';

import { Input, InputSelect } from '../../../components/form';
import useInput from '../../../hooks/useInput';
import { changeNumberWithComma } from '../../../utils/helper';
const initialValue = {
  menuName: '',
  veganLevel: '비건',
  price: '',
};
const FeedFormMenu = ({ inputs, setInputs, errors, setErrors }) => {
  const {
    inputs: menu,
    setInputs: setMenu,
    errors: menuErrors,
    onInputChange: onChangeMenu,
    requiredValidate,
  } = useInput(initialValue);

  const handleClickAdd = () => {
    console.log('??');
    const requiredList = ['menuName', 'price'];
    let isValid = requiredValidate(requiredList);
    if (!isValid) return;

    setInputs({
      ...inputs,
      menu: [...inputs.menu, menu],
    });
    setMenu(initialValue);
    setErrors((state) => ({ ...state, menu: '' }));
  };

  const handleClickDelete = (deleteIdx) => {
    setMenu({
      ...inputs,
      menu: inputs.menu.filter((_, idx) => idx !== deleteIdx),
    });
  };

  return (
    <Wrap className="wrap">
      <FormRow>
        <div className="col">
          <StyledSelect
            label="채식 단계"
            name="veganLevel"
            value={menu.veganLevel}
            onChange={onChangeMenu}
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
            name="menuName"
            value={menu.menuName || ''}
            placeholder="음식 이름을 적어주세요."
            onChange={onChangeMenu}
            error={menuErrors.menuName}
          />
        </div>

        <div className="col">
          <Input
            label="가격"
            name="price"
            value={menu.price || ''}
            placeholder="가격을 적어주세요."
            onChange={onChangeMenu}
            error={menuErrors.price}
          />
        </div>
        <AddMenuBtn type="button" onClick={handleClickAdd} />
      </FormRow>

      {!inputs.menu.length && (
        <MenuCard>
          <div>메뉴를 추가해주세요.</div>
          <p className={errors.menu ? 'err on' : 'err'}>{errors.menu}</p>
        </MenuCard>
      )}
      <CardList>
        {inputs.menu.map((item, idx) => (
          <MenuCard key={idx}>
            <div>
              <h3>
                {item.menuName}
                <span>{item.veganLevel}</span>
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
  color: ${(props) => props.theme.gray[1]};
  padding: 30px;
  box-shadow: ${(props) => props.theme.gray[0]} 0px 1px 6px 0px;
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
    color: white;
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
