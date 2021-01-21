import React, { useEffect } from 'react';
import styled from 'styled-components';
import StoreDetailBox from '../../components/detailBox/storeDetailBox/StoreDetailBox';
import Review from './review/Review';
import EditBtn from '../../components/editBtn/EditBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';
import { useSelector, useDispatch } from 'react-redux';
import { storeActions } from '../../redux/actions';
import Loading from '../../components/loading/Loding';

const StoreDetail = ({ match }) => {
  const storeId = match.params.storeId;
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector((state) => state.store);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(storeActions.getStore(storeId));
  }, [dispatch, storeId]);

  if (isFetching) return <Loading />;

  return (
    <Wrap>
      <StoreDetailBox store={data} isLoggedIn={isLoggedIn} />
      <div className="review">
        <EditBtn to={`/review/${storeId}`} innerText="리뷰 작성" />
        <Review isLoggedIn={isLoggedIn} />
      </div>
      <GoBackLink to="/" innerText="메인으로" />
    </Wrap>
  );
};

export default StoreDetail;

const Wrap = styled.section`
  width: 1200px;
  margin: 58px auto 0;
  .review {
    position: relative;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 1200px;
  }
`;
