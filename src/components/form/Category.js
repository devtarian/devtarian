import React from 'react';
import styled from 'styled-components';

const Category = ({ name, review, onReviewChange }) => {
  const handleReviewChange = (e) => {
    onReviewChange(e);
  };

  return (
    <Wrap className="wrap">
      <label>카테고리</label>
      <input
        type="radio"
        name={name}
        value="store"
        checked={review.category === 'store'}
        onChange={handleReviewChange}
      />
      가게
      <input
        type="radio"
        name={name}
        value="product"
        checked={review.category === 'product'}
        onChange={handleReviewChange}
      />
      제품
    </Wrap>
  );
};

export default Category;

const Wrap = styled.div`
  input + input {
    margin-left: 1rem;
  }
`;
