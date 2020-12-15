import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ title, info }) => {
  return (
    <Wrap>
      <h2>{title}</h2>
      {info.map((item, index) => (
        <li key={index}>
          <button>{item}</button>
        </li>
      ))}
    </Wrap>
  );
};

export default Checkbox;

const Wrap = styled.ul`
  float: left;

  h2 {
    font-size: 17px;
    margin-bottom: 20px;
  }
  li {
    float: left;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.color[1]};
    padding: 3px 7px;
    button {
      color: ${(props) => props.theme.color[1]};
    }
    &:hover {
      background-color: ${(props) => props.theme.brown[0]};
      button {
        color: ${(props) => props.theme.background[0]};
      }
    }
  }
  li + li {
    margin-left: 0.5rem;
  }
`;
