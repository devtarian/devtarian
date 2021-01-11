import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostDetailBox from '../../components/detailBox/postDetailBox/PostDetailBox';
import Review from './review/Review';
import EditBtn from '../../components/editBtn/EditBtn';
import GoBackLink from '../../components/goBackLink/GoBackLink';
import { useSelector, useDispatch } from 'react-redux';
import storeActions from '../../redux/actions/storeActions';
import Loading from '../../components/loading/Loding';

const PostDetail = ({ posts }) => {
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(storeActions.getStore('few'));
  }, []);

  if (isFetching) return <Loading />;

  return (
    <Wrap>
      <PostDetailBox post={posts[0]} />
      <div className="review">
        <EditBtn to="/review" innerText="리뷰 작성" />
        <Review reviewList={posts[0].reviewList} />
      </div>
      <GoBackLink to="/main" innerText="메인으로" />
    </Wrap>
  );
};

export default PostDetail;

const Wrap = styled.section`
  width: 1200px;
  margin: 0 auto;
  .review {
    position: relative;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 1200px;
  }
`;
