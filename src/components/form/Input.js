import React from 'react';
import styled from 'styled-components';

const Input = ({ label, name, value, placeholder, onChange }) => {
  return (
    <Wrap className="wrap">
      <label>{label}</label>
      <input name={name} value={value} placeholder={placeholder} onChange={onChange}></input>
    </Wrap>
  );
};

export default Input;

const Wrap = styled.div`
  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
  }
`;
