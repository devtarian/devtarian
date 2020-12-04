import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import RecentKeyword from './RecentKeyword';

const Search = ({ posTop, bg, recentKeywords, onAddRecentKeywords }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleShowRecentKeywords = (e) => {
    // click한 target이 input일 때 show state 변경
    setShow(() =>
      e.target.className === 'sc-gsTCUz QHgmm' || e.target.className === 'sc-dlfnbm JMAaF' ? true : false
    );
  };

  const handleInputChange = (inputValue) => {
    setValue(inputValue);
  };

  useEffect(() => {
    window.addEventListener('click', handleShowRecentKeywords);
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
