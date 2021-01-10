import React from 'react';
import styled from 'styled-components';

const SignInput = ({ type, placeholder, name, value, error, onInputChange }) => {
  return (
    <Wrap>
      <label>{type}</label>
      <input type={type} placeholder={placeholder} name={name} value={value} onChange={onInputChange} />
      <p className={error ? 'err on' : 'err'}>{error}</p>
    </Wrap>
  );
};

export default SignInput;

const Wrap = styled.div`
  position: relative;
  label {
    font-size: 0;
  }
  input {
    width: 100%;
    margin-bottom: 2.3rem;
    padding: 5px 7px;
    border-bottom: 1px solid ${(props) => props.theme.gray[1]};
    font-size: 1rem;
  }
  .err {
    display: none;
    position: absolute;
    top: 36px;
    font-size: 11px;
    color: ${(props) => props.theme.brown[1]};
  }
  .err.on {
    display: block;
  }
`;
