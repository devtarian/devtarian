import React from 'react';
import styled from 'styled-components';

const vegLevels = ['비건', '락토', '오보', '락토오보', '페스코'];

const VegLevel = ({ activedBtn, onReviewChange, onVegLevelClick }) => {
  const handleReviewChange = (e) => {
    onReviewChange(e);
  };

  const handleVegLevelClick = (e) => {
    onVegLevelClick(e.target.value);
  };

  return (
    <Wrap>
      <label>채식 단계</label>
      {vegLevels.map((level) => (
        <input
          type="button"
          key={level}
          className={activedBtn === level ? 'active' : ''}
          name="vegLevel"
          value={level}
          onClick={(e) => {
            handleReviewChange(e);
            handleVegLevelClick(e);
          }}
        />
      ))}
    </Wrap>
  );
};

export default VegLevel;

const Wrap = styled.div`
  .active {
    background-color: ${(props) => props.theme.green[1]};
    color: ${(props) => props.theme.background[0]};
    transition: none;
  }
  input {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.green[1]};
      color: ${(props) => props.theme.background[0]};
    }
  }
  input + input {
    margin-left: 0.5rem;
  }
`;
