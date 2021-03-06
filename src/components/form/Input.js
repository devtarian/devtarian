import React from 'react';
import styled from 'styled-components';

const Input = ({ label, name, value, placeholder, onChange, error }) => {
  return (
    <InputWrap className="wrap">
      <label>{label}</label>
      <input name={name} value={value} placeholder={placeholder} onChange={onChange}></input>
      <p className={error ? 'err on' : 'err'}>{error}</p>
    </InputWrap>
  );
};

export default Input;

export const InputWrap = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
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
