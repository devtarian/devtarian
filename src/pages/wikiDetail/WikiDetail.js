import React from 'react';
import styled from 'styled-components';
import DetailBox from './DetailBox';
import CommentForm from './CommentForm';
import GoBackLink from '../../components/goBackLink/GoBackLink';

const WikiDetail = () => {
  return (
    <Wrap>
      <DetailBox />
      <CommentForm />
      <GoBackLink to="/vegwiki" />
    </Wrap>
  );
};

export default WikiDetail;

const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
