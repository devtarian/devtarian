import React from 'react';
import styled from 'styled-components';

const SubmitBtn = ({ value, onSubmit }) => {
  return (
    <SubmitBtnWrap className="wrap">
      <button type="submit" className="submitBtn" onClick={onSubmit}>
        {value}
      </button>
    </SubmitBtnWrap>
  );
};

export default SubmitBtn;

export const SubmitBtnWrap = styled.div`
  width: 33.3333%;
  margin: 0 auto;
  margin-top: 2rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray[1]};
  background-color: ${(props) => props.theme.green[1]};
  text-align: center;

  button {
    width: 100%;
    height: 100%;
    padding: 0.65rem 0.75rem;
    color: ${(props) => props.theme.background[0]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
  }
  &:hover {
    background-color: ${(props) => props.theme.green[0]};
  }
`;
