import React from 'react';
import styled from 'styled-components';
import DetailBox from './DetailBox';
import Review from './Review';

const DETAIL = {
  urls: [],
  store: '그랑블루',
  contact: '02-927-5808',
  openHours: { open: '매일 09:00 ~ 21:00', dayOff: '공휴일' },
  menus: {
    0: ['어썸버거', '3000'],
    1: ['어썸버거', '3000'],
    2: ['어썸버거', '3000'],
  },
  location: '서울특별시 중구 수표동 수표로 66',
};

const Detail = () => {
  return (
    <Wrap>
      <DetailBox />
      <Review />
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.section`
  width: 1200px;
  margin: 0 auto;
`;
