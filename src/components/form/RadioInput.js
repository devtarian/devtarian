import React from 'react';
import styled from 'styled-components';

const CATEGORIES = ['가게', '제품'];

const RadioCategory = ({ name, label, category, onChange }) => {
  const handleReviewChange = (e) => {
    onChange(e);
  };

  return (
    <Wrap className="wrap">
      <label>{label}</label>
      {CATEGORIES.map((item) => (
        <div className="innerWrap" key={item}>
          <input type="radio" name={name} value={item} checked={category === item} onChange={handleReviewChange} />
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
  }
  .innerWrap + .innerWrap {
    margin-left: 1rem;
  }
`;
