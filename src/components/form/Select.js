import React from 'react';
import styled from 'styled-components';
import { translate } from '../../utils/helper';

const Select = ({ className, info, sort, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <SelectWrap value={sort} className={className} onChange={handleChange}>
      {info.map((item, index) => (
        <option key={index} value={item}>
          {translate(item)}
        </option>
      ))}
    </SelectWrap>
  );
};

export default Select;

export const SelectWrap = styled.select`
  display: flex;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color[1]};
  font-size: 16px;
  color: ${(props) => props.theme.color[1]};
`;
