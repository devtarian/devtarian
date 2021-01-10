import React from 'react';
import styled from 'styled-components';

const SelectAll = ({ title, name, selectedList, error, options, exceptOnly, onChange }) => {
  const handleClick = (item) => {
    let newSelectedList = [];

    if (exceptOnly.indexOf(item.key) > -1) {
      newSelectedList = [item.key];
    } else {
      newSelectedList =
        selectedList.indexOf(item.key) > -1
          ? selectedList.filter((select) => select !== item.key)
          : [...selectedList.filter((select) => exceptOnly.indexOf(select) === -1), item.key];
    }

    onChange({
      preventDefault: () => {},
      target: {
        name,
        value: newSelectedList,
      },
    });
  };

  return (
    <Wrap className="wrap">
      <label>{title}</label>
      {options.map((item) => (
        <Button
          type="button"
          key={item.key}
          className={selectedList.indexOf(item.key) > -1 && 'active'}
          name={item.key}
          onClick={() => handleClick(item)}>
          {item.title}
        </Button>
      ))}
      <p className={error ? 'err on' : 'err'}>{error}</p>
    </Wrap>
  );
};

export default SelectAll;

const Wrap = styled.div`
  position: relative;
  .err {
    display: none;
    position: absolute;
    top: 85px;
    font-size: 11px;
    color: ${(props) => props.theme.brown[1]};
  }
  .err.on {
    display: block;
  }
`;

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray[1]};
  transition: all 0.3s ease;
  margin-right: 0.5rem;
  &:hover {
    background-color: ${(props) => props.theme.brown[0]};
  }
  &.active {
    background-color: ${(props) => props.theme.brown[0]};
    transition: none;
  }
`;
