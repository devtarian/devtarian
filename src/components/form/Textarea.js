import React from 'react';
import styled from 'styled-components';

const Textarea = ({ label, name, placeholder, onReviewChange }) => {
  return (
    <Wrap className="wrap">
      <label>{label}</label>
      <textarea name={name} placeholder={placeholder} onChange={onReviewChange}></textarea>
    </Wrap>
  );
};

export default Textarea;

const Wrap = styled.div`
  textarea {
    width: 100%;
    padding: 10px;
    min-height: 500px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
  }
`;
