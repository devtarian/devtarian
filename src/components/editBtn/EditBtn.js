import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as EditSvg } from '../../images/icons/edit.svg';

const EditBtn = ({ to, innerText }) => {
  return (
    <Wrap>
      <Link to={to}>
        <Edit />
        <span>{innerText}</span>
      </Link>
    </Wrap>
  );
};

export default EditBtn;

const Wrap = styled.div`
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
`;

const Edit = styled(EditSvg)`
  width: 20px;
  height: 20px;
  vertical-align: top;
  fill: ${(props) => props.theme.background[0]};
`;
