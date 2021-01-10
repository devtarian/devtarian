import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';
import { ProfileWrap } from '../components/profile/Profile';
import SubNav from '../components/header/nav/SubNav';

const DefaultLayout = ({ component: Component, user, ...rest }) => {
  const [show, setShow] = useState(false);

  const onSubNavShow = () => {
    setShow(!show);
  };

  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [wikiPosts, setWikiPosts] = useState(DUMMY_WIKIPOST);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Header onSubNavShow={onSubNavShow} />
          {show && <SubNav />}
          <Component {...props} posts={posts} wikiPosts={wikiPosts} />
        </Wrap>
      )}
    />
  );
};

export default DefaultLayout;

const Wrap = styled.div`
  padding-top: 58px;

  ${ProfileWrap} {
    width: 88px;
    .thumbNail {
      width: 32px;
      height: 32px;
      margin: 0.6rem 0;
    }
    .info {
      left: 39px;

      a {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 767px) {
    margin-top: 58px;
  }
`;

const DUMMY_POSTS = [
  {
    id: 0,
    step: 0,
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: [
        '월요일 09:00 ~ 21:00',
        '화요일 09:00 ~ 21:00',
        '수요일 09:00 ~ 21:00',
        '목요일 09:00 ~ 21:00',
        '금요일 09:00 ~ 21:00',
        '토요일 09:00 ~ 21:00',
        '일요일 09:00 ~ 21:00',
      ],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
        {
          id: 1,
          menu: '어썸 버거',
          vegtype: ['페스코'],
          price: 7000,
        },
        {
          id: 2,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
        {
          id: 3,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [
          'http://placehold.it/150x150.png?text=A',
          'http://placehold.it/150x150.png?text=B',
          'http://placehold.it/150x150.png?text=C',
          'http://placehold.it/150x150.png?text=D',
          'http://placehold.it/150x150.png?text=E',
        ],
        starRating: 5.0,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    step: 0,
    storeCategory: '식당',
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: [
        '월요일 09:00 ~ 21:00',
        '화요일 09:00 ~ 21:00',
        '수요일 09:00 ~ 21:00',
        '목요일 09:00 ~ 21:00',
        '금요일 09:00 ~ 21:00',
        '토요일 09:00 ~ 21:00',
        '일요일 09:00 ~ 21:00',
      ],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
        {
          id: 1,
          menu: '어썸 버거',
          vegtype: ['페스코'],
          price: 7000,
        },
        {
          id: 2,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
        {
          id: 3,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [
          'http://placehold.it/150x150.png?text=A',
          'http://placehold.it/150x150.png?text=B',
          'http://placehold.it/150x150.png?text=C',
          'http://placehold.it/150x150.png?text=D',
          'http://placehold.it/150x150.png?text=E',
        ],
        starRating: 5.0,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    step: 0,
    storeCategory: '식당',
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: [
        '월요일 09:00 ~ 21:00',
        '화요일 09:00 ~ 21:00',
        '수요일 09:00 ~ 21:00',
        '목요일 09:00 ~ 21:00',
        '금요일 09:00 ~ 21:00',
        '토요일 09:00 ~ 21:00',
        '일요일 09:00 ~ 21:00',
      ],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
        {
          id: 1,
          menu: '어썸 버거',
          vegtype: ['페스코'],
          price: 7000,
        },
        {
          id: 2,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
        {
          id: 3,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [
          'http://placehold.it/150x150.png?text=A',
          'http://placehold.it/150x150.png?text=B',
          'http://placehold.it/150x150.png?text=C',
          'http://placehold.it/150x150.png?text=D',
          'http://placehold.it/150x150.png?text=E',
        ],
        starRating: 5.0,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    step: 0,
    storeCategory: '식당',
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: [
        '월요일 09:00 ~ 21:00',
        '화요일 09:00 ~ 21:00',
        '수요일 09:00 ~ 21:00',
        '목요일 09:00 ~ 21:00',
        '금요일 09:00 ~ 21:00',
        '토요일 09:00 ~ 21:00',
        '일요일 09:00 ~ 21:00',
      ],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
        {
          id: 1,
          menu: '어썸 버거',
          vegtype: ['페스코'],
          price: 7000,
        },
        {
          id: 2,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
        {
          id: 3,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [
          'http://placehold.it/150x150.png?text=A',
          'http://placehold.it/150x150.png?text=B',
          'http://placehold.it/150x150.png?text=C',
          'http://placehold.it/150x150.png?text=D',
          'http://placehold.it/150x150.png?text=E',
        ],
        starRating: 5.0,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    step: 0,
    storeCategory: '식당',
    writer: { name: 'Harry', thumbNail: '' },
    createAt: '3초 전',
    favorite: false,
    store: {
      category: '식당',
      vegType: ['베지테리언'],
      files: [],
      starRating: 4.5,
      storeName: '발우공양',
      region: '서울',
      address: '서울특별시 중구 수표동 수표로 66',
      contactNum: '010-7318-1226',
      operatingHours: [
        '월요일 09:00 ~ 21:00',
        '화요일 09:00 ~ 21:00',
        '수요일 09:00 ~ 21:00',
        '목요일 09:00 ~ 21:00',
        '금요일 09:00 ~ 21:00',
        '토요일 09:00 ~ 21:00',
        '일요일 09:00 ~ 21:00',
      ],
      operatingHoursMemo: ['휴무일: 공휴일'],
      menuList: [
        {
          id: 0,
          menu: '어썸 버거',
          vegtype: ['비건'],
          price: 7000,
        },
        {
          id: 1,
          menu: '어썸 버거',
          vegtype: ['페스코'],
          price: 7000,
        },
        {
          id: 2,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
        {
          id: 3,
          menu: '어썸 버거',
          vegtype: ['락토오보'],
          price: 7000,
        },
      ],
    },
    reviewList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: '' },
        files: [
          'http://placehold.it/150x150.png?text=A',
          'http://placehold.it/150x150.png?text=B',
          'http://placehold.it/150x150.png?text=C',
          'http://placehold.it/150x150.png?text=D',
          'http://placehold.it/150x150.png?text=E',
        ],
        starRating: 5.0,
        title: '와!',
        reviewContents:
          'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
        likes: 1,
        likesOfMe: false,
        commentList: [
          {
            id: 0,
            writer: { name: 'Harry', thumbNail: '' },
            createAt: '3초 전',
            commentContents: '굉장해요!',
          },
        ],
      },
    ],
  },
];

const DUMMY_WIKIPOST = [
  {
    id: 0,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '멋져요!',
      },
      {
        id: 1,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '멋져요!',
      },
    ],
  },
  {
    id: 1,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
  {
    id: 2,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
  {
    id: 3,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
  {
    id: 4,
    category: '가공식품',
    files: [],
    product: '로투스',
    ingredient: '밀/대두',
    commentList: [
      {
        id: 0,
        writer: { name: 'Harry', thumbNail: 'http://placehold.it/40x40.png?text=A' },
        createAt: '3초 전',
        commentContents: '',
      },
    ],
  },
];
