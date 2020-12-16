import React from 'react';
import styled from 'styled-components';

const Select = ({ label, name, value, onChange, options }) => {
  return (
    <Wrap>
      {label && <label>{label}</label>}
      <select name={name} value={value} onChange={onChange}>
        {options.map((item, idx) => (
          <option key={idx} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </Wrap>
  );
};

export default Select;

const Wrap = styled.div`
  select {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};

    option {
      font-size: 1.1rem;
    }
  }
`;
