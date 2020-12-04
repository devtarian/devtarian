import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import RecentKeyword from './RecentKeyword';

const SearchContainer = ({ posTop, bg }) => {
  const [show, setShow] = useState(false);

  const [keywords, setKeywords] = useState([]);
  const [recentKeywords, setRecentKeywords] = useState([]);

  console.log(localStorage.getItem('recentKeywords'));
  useEffect(() => {
    localStorage.setItem('recentKeywords', recentKeywords);
  }, [recentKeywords]);

  const handleOutSideClick = (e) => {
    // click한 target이 input일 때 show state 변경
    setShow(() => (e.target.className === 'sc-gsTCUz QHgmm' ? true : false));
  };

  const handleAddRecentKeywords = (keyword) => {
    if (!keywords.includes(keyword)) {
      setKeywords([keyword, ...keywords]);
    }
    setRecentKeywords(keywords.slice(0, 5));
  };

  useEffect(() => {
    window.addEventListener('click', handleOutSideClick);
    return () => {
      window.removeEventListener('click', handleOutSideClick);
    };
  }, []);

  return (
    <Wrap bg={bg}>
      <InnerWrap posTop={posTop}>
        <SearchForm onAddRecentKeywords={handleAddRecentKeywords} />
        {show && <RecentKeyword />}
      </InnerWrap>
    </Wrap>
  );
};

export default SearchContainer;

const Wrap = styled.div`
  height: 434px;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;

const InnerWrap = styled.div`
  position: relative;
  top: ${(props) => props.posTop};
  width: 876px;
  max-height: 239px;
  margin: 0 auto;
`;
