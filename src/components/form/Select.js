import React from 'react';
import styled from 'styled-components';

const Select = ({ info }) => {
  return (
    <SelectWrap>
      {info.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </SelectWrap>
  );
};

export default Select;

export const SelectWrap = styled.select`
  float: right;
  padding: 5px 10px;
  margin-top: 3.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color[1]};
  font-size: 16px;
  color: ${(props) => props.theme.color[1]};
`;
