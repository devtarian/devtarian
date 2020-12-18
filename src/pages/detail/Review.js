import React from 'react';
import styled from 'styled-components';

const Review = () => {
  return (
    <Wrap>
      <strong>25 개의 리뷰</strong>
      <img className="photos" src="" alt="" />
      <p className="title">제목</p>
      <p className="contents">내용</p>
    </Wrap>
  );
};

export default Review;

const Wrap = styled.section`
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;
