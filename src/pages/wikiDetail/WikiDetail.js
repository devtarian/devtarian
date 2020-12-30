import React from 'react';
import styled from 'styled-components';
import WikiDetailBox from '../../components/detailBox/wikiDetailBox/WikiDetailBox';
import Comment from './Comment';
import GoBackLink from '../../components/goBackLink/GoBackLink';

const WikiDetail = ({ wikiPosts }) => {
  return (
    <Wrap>
      <WikiDetailBox wikiPosts={wikiPosts[0]} />
      <Comment data={wikiPosts[0].commentList} />
      <GoBackLink to="/vegwiki" />
    </Wrap>
  );
};

export default WikiDetail;

const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
