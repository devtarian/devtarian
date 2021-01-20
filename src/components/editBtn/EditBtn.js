import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Svg from '../common/Svg';

const EditBtn = ({ to, innerText }) => {
  return (
    <EditBtnWrap>
      <Link to={to}>
        <Svg type="edit" w="24px" h="24px" radius="50%" color="white" />
        <span>{innerText}</span>
      </Link>
    </EditBtnWrap>
  );
};

export default EditBtn;

export const EditBtnWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  a {
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    background-color: ${(props) => props.theme.green[1]};
    text-align: center;
    color: ${(props) => props.theme.background[0]};
    -webkit-box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};
    box-shadow: 0 3px 5px ${(props) => props.theme.gray[0]};

    span {
      margin-left: 0.25rem;
      font-size: 0.95rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.green[0]};
    }
  }

  @media (max-width: 767px) {
    right: 1.5rem;
  }
`;
