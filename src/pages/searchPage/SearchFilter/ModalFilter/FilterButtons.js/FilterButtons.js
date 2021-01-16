import React from 'react';
import filterConfig from '../../../../../config/filterConfig';
import Button from '../../../../../Styles/Button';
import styled from 'styled-components';
import Svg from '../../../../../components/common/Svg';

const FilterButtons = ({ title, type, value, onChangeFilter }) => {
  return (
    <>
      <h4>{title}</h4>
      <ButtonWrap>
        {Object.keys(filterConfig[type]).map((key, idx) => {
          const { title, color } = filterConfig[type][key];
          return (
            <StyledButton
              key={idx}
              clicked={value === key || value === Number(key)}
              onClick={() => onChangeFilter(type, key)}>
              {color && <Svg type={key} w="24px" h="24px" radius="50%" p="5px" bg={color} color="white" m="0 5px 0" />}
              <span>{title}</span>
            </StyledButton>
          );
        })}
      </ButtonWrap>
    </>
  );
};

export default React.memo(FilterButtons);

const ButtonWrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-lines: multiple;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
