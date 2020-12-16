import React from 'react';
import styled from 'styled-components';

const Select = ({ info }) => {
  return (
    <Wrap>
      {info.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </Wrap>
  );
};

export default Select;

const Wrap = styled.select`
  float: right;
  padding: 5px 10px;
  margin-top: 3.5rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color[1]};
  font-size: 16px;
  color: ${(props) => props.theme.color[1]};
`;
