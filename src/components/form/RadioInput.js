import React from 'react';
import styled from 'styled-components';

const RadioCategory = ({ name, label, info, category, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <Wrap className="wrap">
      <label>{label}</label>
      {info.map((item, index) => (
        <div className="innerWrap" key={item}>
          <input
            id={`item${index}`}
            type="radio"
            name={name}
            value={item}
            checked={category === item}
            onChange={handleChange}
          />
          <label htmlFor={`item${index}`}>{item}</label>
        </div>
      ))}
    </Wrap>
  );
};

export default RadioCategory;

const Wrap = styled.div`
  overflow: hidden;
  .innerWrap {
    float: left;
    margin-right: 1rem;

    label {
      float: right;
      margin-left: 0.3rem;
      font-size: 16px;
      font-weight: normal;
      cursor: pointer;
    }
  }
`;
