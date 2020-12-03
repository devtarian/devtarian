import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import RecentKeyword from './RecentKeyword';

const SearchContainer = ({ positionTop, background }) => {
  const [show, setShow] = useState(false);

  const handleOutSideClick = (e) => {
    // click한 target이 input일 때 show state 변경
    setShow(() => (e.target.className === 'sc-gsTCUz QHgmm' ? true : false));
  };

  useEffect(() => {
    window.addEventListener('click', handleOutSideClick);
    return () => {
      window.removeEventListener('click', handleOutSideClick);
    };
  }, []);

  return (
    <SearchWrap background={background}>
      <SearchInnerWrap positionTop={positionTop}>
        <SearchForm />
        {show && <RecentKeyword />}
      </SearchInnerWrap>
    </SearchWrap>
  );
};

export default SearchContainer;

const SearchWrap = styled.div`
  height: 420px;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
`;

const SearchInnerWrap = styled.div`
  position: relative;
  top: ${(props) => props.positionTop};
  width: 876px;
  max-height: 239px;
  margin: 0 auto;
`;
