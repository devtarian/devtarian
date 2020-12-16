import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ title, info, activedBtn, onReviewChange, onCheckboxClick }) => {
  const handleBtnClick = (e) => {
    onReviewChange(e);
    onCheckboxClick(e.target.value);
  };

  return (
    <CheckboxWrap className="wrap">
      <label>{title}</label>
      {info.map((item, index) => (
        <input
          key={index}
          type="button"
          value={item}
          className={activedBtn === item ? 'active' : ''}
          onClick={handleBtnClick}
        />
      ))}
    </CheckboxWrap>
  );
};

export default Checkbox;

export const CheckboxWrap = styled.div`
  .active {
    background-color: ${(props) => props.theme.brown[0]};
    transition: none;
  }
  input {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.brown[0]};
    }
  }
  input + input {
    margin-left: 0.5rem;
  }
`;
