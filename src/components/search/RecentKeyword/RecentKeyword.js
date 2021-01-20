import React from 'react';
import styled from 'styled-components';
import history from '../../../history';
import queryString from 'query-string';
import { changeObjectToQuery } from '../../../utils/helper';

const RecentKeyword = ({ recentKeywords, onCloseRecentKeywords }) => {
  const query = queryString.parse(history.location.search);

  const handleClickKeyword = (keyword) => {
    var ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const lat = data[0].y;
        const lng = data[0].x;
        window.location = `/search${changeObjectToQuery({
          ...query,
          q: keyword,
          lat,
          lng,
        })}`;
      } else {
        window.location = `/search?q=${keyword}&lat=37.573&lng=126.9794&range=0`;
      }
      onCloseRecentKeywords();
    });
  };
  return (
    <Wrap>
      <strong>최근 검색어</strong>
      <KeywordList>
        {recentKeywords?.map((keyword) => (
          <li key={keyword} onClick={() => handleClickKeyword(keyword)}>
            <span>{keyword}</span>
          </li>
        ))}
      </KeywordList>
    </Wrap>
  );
};
export default RecentKeyword;

const Wrap = styled.div`
  z-index: 1000;
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
  span {
    display: block;
    padding: 0.2rem 0;

    &:hover {
      transition: all 0.2s ease;
      color: ${(props) => props.theme.green[1]};
      font-weight: bolder;
    }
  }
`;
