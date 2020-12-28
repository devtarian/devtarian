import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import RecentKeyword from './RecentKeyword';
import { loadRecentKeywords, saveRecentKeywords } from '../../Service/recentKeywordService';

const Search = ({ posTop, bg }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const [recentKeywords, setRecentKeywords] = useState(loadRecentKeywords() || []);

  useEffect(() => {
    saveRecentKeywords(recentKeywords);
  }, [recentKeywords]);

  const onAddRecentKeywords = (keyword) => {
    if (recentKeywords?.includes(keyword)) return;
    setRecentKeywords([keyword, ...recentKeywords].slice(0, 5));
  };

  const handleShowRecentKeywords = (e) => {
    setShow(() => (e.target.dataset.show === 'show' ? true : false));
  };

  const handleInputChange = (inputValue) => {
    setValue(inputValue);
  };

  useEffect(() => {
    window.addEventListener('click', handleShowRecentKeywords, false);
    return () => {
      window.removeEventListener('click', handleShowRecentKeywords);
    };
  }, []);

  return (
    <Wrap bg={bg}>
      <InnerWrap posTop={posTop}>
        <SearchForm value={value} onInputChange={handleInputChange} onAddRecentKeywords={onAddRecentKeywords} />
        {show && <RecentKeyword recentKeywords={recentKeywords} />}
      </InnerWrap>
    </Wrap>
  );
};

export default Search;

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
