import React from 'react';
import filterConfig from '../../../../../config/filterConfig';
import Button from '../../../../../Styles/Button';

const FilterButtons = ({ title, type, value, onChangeFilter }) => {
  return (
    <>
      <h4>{title}</h4>
      {Object.keys(filterConfig[type]).map((key, idx) => (
        <Button
          key={idx}
          h="35px"
          clicked={value === key || value === Number(key)}
          onClick={() => onChangeFilter(type, key)}>
          {filterConfig[type][key].value}
        </Button>
      ))}
    </>
  );
};

export default React.memo(FilterButtons);
