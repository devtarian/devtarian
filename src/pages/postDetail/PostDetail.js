import React from 'react';
import styled from 'styled-components';
import PostDetailBox from '../../components/detailBox/postDetailBox/PostDetailBox';
import Review from './Review';
import EditBtn from '../../components/editBtn/EditBtn';

const DETAIL = {
  urls: [],
  store: '그랑블루',
  contactNum: '02-927-5808',
  openHours: { open: '매일 09:00 ~ 21:00', dayOff: '공휴일' },
  menuList: {
    0: ['어썸버거', '3000'],
    1: ['어썸버거', '3000'],
    2: ['어썸버거', '3000'],
  },
  address: '서울특별시 중구 수표동 수표로 66',
};

const Detail = ({ posts }) => {
  return (
    <Wrap>
      <PostDetailBox />
      <div className="review">
        <EditBtn to="/review" innerText="리뷰 작성" />
        <Review posts={posts} />
      </div>
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.section`
  width: 1200px;
  margin: 0 auto;
  .review {
    position: relative;
  }
`;
