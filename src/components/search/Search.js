import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from './searchForm/SearchForm';
import RecentKeyword from './recentKeyword/RecentKeyword';
import { loadRecentKeywords, saveRecentKeywords } from '../../service/recentKeywordService';

const Search = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const [recentKeywords, setRecentKeywords] = useState(loadRecentKeywords() || []);

  useEffect(() => {
    saveRecentKeywords(recentKeywords);
  }, [recentKeywords]);

  const onAddRecentKeywords = (keyword) => {
    if (recentKeywords?.includes(keyword)) return;
    setRecentKeywords([keyword, ...recentKeywords].slice(0, 5));
    handleCloseRecentKeyword();
  };

  const handleShowRecentKeywords = (e) => {
    setShow(() => (e.target.dataset.show === 'show' ? true : false));
  };

  const handleInputChange = (inputValue) => {
    setValue(inputValue);
  };

  const handleCloseRecentKeyword = () => {
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener('click', handleShowRecentKeywords, false);
    return () => {
      window.removeEventListener('click', handleShowRecentKeywords);
    };
  }, []);

  return (
    <SearchWrap>
      <InnerWrap>
        <SearchForm value={value} onInputChange={handleInputChange} onAddRecentKeywords={onAddRecentKeywords} />
        {show && <RecentKeyword recentKeywords={recentKeywords} onCloseRecentKeywords={handleCloseRecentKeyword} />}
      </InnerWrap>
    </SearchWrap>
  );
};

export default Search;

export const SearchWrap = styled.div``;

export const InnerWrap = styled.div`
  position: relative;
  width: 55%;
  top: 80px;
  max-height: 239px;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 82%;
  }
`;
