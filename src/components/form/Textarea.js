import React from 'react';
import styled from 'styled-components';

const Textarea = ({ label, name, value, placeholder, onChange }) => {
  return (
    <Wrap>
      <label>{label}</label>
      <textarea name={name} value={value} placeholder={placeholder} onChange={onChange}></textarea>
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
    border: 1px solid #999;
  }
`;
