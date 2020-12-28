import React from 'react';
import styled from 'styled-components';
import PostDetailBox from '../../components/detailBox/postDetailBox/PostDetailBox';
import Review from './Review';
import EditBtn from '../../components/editBtn/EditBtn';

const PostDetail = ({ posts }) => {
  return (
    <Wrap>
      <PostDetailBox posts={posts[0]} />
      <div className="review">
        <EditBtn to="/review" innerText="리뷰 작성" />
        {posts.map}
        <Review reviewList={posts[0].reviewList} />
      </div>
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
`;
