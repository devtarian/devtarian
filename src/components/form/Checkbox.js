import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ name, label, info, activedBtn, onChange, error }) => {
  const handleBtnClick = (e) => {
    onChange({
      preventDefault: () => {},
      target: {
        name, // vegLevel
        value: e.target.value,
      },
    });
  };

  return (
    <CheckboxWrap className="wrap">
      <label>{label}</label>
      {info.map((item, index) => (
        <input
          key={index}
          type="button"
          name={item}
          value={item}
          className={activedBtn === item ? 'active' : ''}
          onClick={handleBtnClick}
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
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.brown[0]};
    }
  }
  input + input {
    margin-left: 0.5rem;
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
