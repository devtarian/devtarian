import React from 'react';
import styled from 'styled-components';

const Textarea = ({ label, name, placeholder, onChange, rows = '23' }) => {
  return (
    <Wrap className="wrap">
      <label>{label}</label>
      <textarea name={name} placeholder={placeholder} onChange={onChange} rows={rows}></textarea>
    </Wrap>
  );
};

export default Textarea;

const Wrap = styled.div`
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
  }
`;
