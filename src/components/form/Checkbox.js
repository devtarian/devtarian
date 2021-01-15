import React from 'react';
import styled from 'styled-components';
import { translate } from '../../utils/helper';

const Checkbox = ({ name, setInputs, label, info, activedBtn, onCheckboxClick, error }) => {
  const handleBtnClick = (name, value) => {
    setInputs((state) => ({
      ...state,
      [name]: value,
    }));
    onCheckboxClick(value);
  };

  return (
    <CheckboxWrap className="wrap">
      <label>{label}</label>
      {info.map((item, index) => (
        <input
          key={index}
          type="button"
          name={name}
          value={translate(item)}
          className={activedBtn === item ? 'active' : ''}
          onClick={() => handleBtnClick(name, item)}
        />
      ))}
      <p className={error ? 'err on' : 'err'}>{error}</p>
    </CheckboxWrap>
  );
};

export default Checkbox;

export const CheckboxWrap = styled.div`
  position: relative;
  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: bolder;
  }
  .active {
    background-color: ${(props) => props.theme.brown[0]};
    transition: none;
  }
  input {
    padding: 0.5rem 0.75rem;
    margin: 0 0.5rem 0.5rem 0;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.brown[0]};
    }
  }
  .err {
    display: none;
    position: absolute;
    bottom: -20px;
    font-size: 11px;
    color: ${(props) => props.theme.brown[1]};
  }
  .err.on {
    display: block;
  }
`;
