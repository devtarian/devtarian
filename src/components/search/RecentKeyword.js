import React from 'react';
import styled from 'styled-components';

const RecentKeyword = () => {
  return (
    <Wrap>
      <strong>최근 검색어</strong>
      <KeywordList>
        <li>
          <a href="">서울</a>
        </li>
        <li>
          <a href="">종로</a>
        </li>
        <li>
          <a href="">연남</a>
        </li>
        <li>
          <a href="">서울숲</a>
        </li>
        <li>
          <a href="">한남</a>
        </li>
      </KeywordList>
    </Wrap>
  );
};
export default RecentKeyword;

const Wrap = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  padding: 17px 50px 18px 20px;
  border-radius: 4px;
  border: 1px solid #ededed;
  background-color: #fff;
  opacity: 0.85;

  strong {
    display: block;
    padding-bottom: 5px;
    font-size: 17px;
  }
`;

const KeywordList = styled.ul`
  a {
    display: block;
    padding: 0.2rem 0;

    &:hover {
      transition: all 0.2s ease;
      color: green;
      font-weight: bolder;
    }
  }
`;
