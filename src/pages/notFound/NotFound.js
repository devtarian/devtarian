import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as notFoundSvg } from '../../images/icons/notFound.svg';

const NotFound = () => {
  return (
    <Wrap>
      <NotFoundIcon />
      <p>
        찾을 수 없는 페이지 입니다. <br /> 요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :)
      </p>
      <Link to="/">메인으로 이동</Link>
    </Wrap>
  );
};

export default NotFound;

const Wrap = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p {
    margin: 1rem 0 3rem;
    line-height: 1.7rem;
  }
  a {
    margin: 0 auto;
    padding: 5px 15px;
    border: 1px solid ${(props) => props.theme.color[0]};
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    text-align: center;
  }
`;

const NotFoundIcon = styled(notFoundSvg)`
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
