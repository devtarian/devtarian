import React from 'react';
import styled from 'styled-components';
import WikiDetailBox from '../../components/detailBox/wikiDetailBox/WikiDetailBox';
import WikiComment from './WikiComment';
import EditBtn from '../../components/editBtn/EditBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';

const WikiDetail = ({ wikiPosts }) => {
  return (
    <Wrap>
      <WikiDetailBox wikiPosts={wikiPosts[0]} />
      <div className="comment">
        <EditBtn to="/wiki" innerText="편집" />
        <WikiComment commentList={wikiPosts[0].commentList} />
      </div>
      <GoBackLink to="/vegwiki" innerText="목록으로" />
    </Wrap>
  );
};

export default WikiDetail;

const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  .comment {
    position: relative;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 1200px;
  }
`;
