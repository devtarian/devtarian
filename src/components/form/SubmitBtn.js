import React from 'react';
import styled from 'styled-components';

const SubmitBtn = ({ value, onClick }) => {
  return (
    <Wrap>
      <button type="submit" className="submitBtn" onClick={onClick}>
        {value}
      </button>
    </Wrap>
  );
};

export default SubmitBtn;

const Wrap = styled.div`
  width: 33.3333%;
  margin: 0 auto;
  margin-top: 2rem;

  border-radius: 4px;
  border: 1px solid #999;
  background-color: green;
  text-align: center;

  button {
    width: 100%;
    height: 100%;
    padding: 0.65rem 0.75rem;
    color: #fff;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.25);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.25);
  }
`;
