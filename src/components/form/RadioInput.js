import React from 'react';
import styled from 'styled-components';

const RadioCategory = ({ name, label, info, category, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <Wrap className="wrap">
      <label>{label}</label>
      {info.map((item) => (
        <div className="innerWrap" key={item}>
          <input type="radio" name={name} value={item} checked={category === item} onChange={handleChange} />
          <span>{item}</span>
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

    span {
      margin-left: 0.3rem;
    }
  }
  .innerWrap + .innerWrap {
    margin-left: 1rem;
  }
`;
