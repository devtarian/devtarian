import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { wikiDetailActions } from '../../redux/actions';

import WikiDetailBox from '../../components/detailBox/wikiDetailBox/WikiDetailBox';
import WikiComment from './WikiComment';
import EditBtn from '../../components/editBtn/EditBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';
import WikiInfo from './wikiInfo/WikiInfo';
import Loading from '../../components/loading/Loding';

const WikiDetail = ({ match }) => {
  const dispatch = useDispatch();
  const wikiId = match.params.wikiId;
  const { isLoggedIn, userId } = useSelector((state) => state.auth);
  const { isFetching, data } = useSelector((state) => state.wikiDetail);

  useEffect(() => {
    dispatch(wikiDetailActions.getWikiDetail(wikiId));
  }, [dispatch, wikiId]);
  if (isFetching) return <Loading />;

  return (
    <Wrap>
      <WikiDetailBox wikiId={wikiId} isLoggedIn={isLoggedIn} />
      <WikiInfo value={data.info} />
      <div className="comment">
        {userId === data.writer.userId && <EditBtn to={`/wikiForm/${wikiId}`} innerText="편집" />}

        <WikiComment wikiId={wikiId} />
      </div>
      <GoBackLink to="/vegwiki" innerText="목록으로" />
    </Wrap>
  );
};

export default WikiDetail;

const Wrap = styled.div`
  width: 1200px;
  margin: 58px auto 0;
  .comment {
    position: relative;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 1200px;
  }
`;
