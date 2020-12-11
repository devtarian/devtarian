import React from 'react';
import styled from 'styled-components';

const RecentKeyword = ({ recentKeywords }) => {
  return (
    <Wrap>
      <strong>최근 검색어</strong>
      <KeywordList>
        {recentKeywords?.map((keyword) => (
          <li key={keyword}>
            <a href="">{keyword}</a>
          </li>
        ))}
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
  border: 1px solid ${(props) => props.theme.gray[1]};
  background-color: ${(props) => props.theme.background[0]};
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
      color: ${(props) => props.theme.green[1]};
      font-weight: bolder;
    }
  }
`;
