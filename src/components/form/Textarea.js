import React from 'react';
import styled from 'styled-components';

const Textarea = ({ label, name, value, placeholder, onChange, error, rows = '23' }) => {
  return (
    <Wrap className="wrap">
      <label>{label}</label>
      <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} rows={rows}></textarea>
      <p className={error ? 'err on' : 'err'}>{error}</p>
    </Wrap>
  );
};

export default Textarea;

const Wrap = styled.div`
  position: relative;
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
  }

  .err {
    display: none;
    position: absolute;
    bottom: -15px;
    font-size: 11px;
    color: ${(props) => props.theme.brown[1]};
  }
  .err.on {
    display: block;
  }
`;
