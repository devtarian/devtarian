import React from 'react';
import styled from 'styled-components';

const Select = ({ className, label, name, value, onChange, options }) => {
  return (
    <Wrap className={className}>
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
    font: inherit;
    padding: 9px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};

    option {
      font-size: 1.1rem;
    }
  }
`;
