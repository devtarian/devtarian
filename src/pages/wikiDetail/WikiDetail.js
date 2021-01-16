import React from 'react';
import styled from 'styled-components';
import WikiDetailBox from '../../components/detailBox/wikiDetailBox/WikiDetailBox';
import WikiComment from './WikiComment';
import EditBtn from '../../components/editBtn/EditBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';

const WikiDetail = ({ match }) => {
  const wikiId = match.params.wikiId;

  return (
    <Wrap>
      <WikiDetailBox wikiId={wikiId} />
      <div className="comment">
        <EditBtn to={`/wikiForm/${wikiId}`} innerText="편집" />
        {/* <WikiComment wikiId={wikiId}/> */}
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
