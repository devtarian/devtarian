import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, user, ...rest }) => {
  const INIT_POST = [
    {
      id: 0,
      writer: user,
      createAt: new Date(),
      favorite: false,
      store: {
        category: '식당',
        vegType: [],
        imgFiles: [],
        imgFileURLs: [],
        starRating: '⭐⭐⭐⭐⭐',
        storeName: '발우공양',
        region: '서울',
        location: '서울특별시 중구 수표동 수표로 66',
        contact: '010-7318-1226',
        openHours: { open: '매일 09:00 ~ 21:00', dayOff: '공휴일' },
        menus: [
          {
            id: 0,
            menu: '어썸 버거',
            vegType: [],
            price: 7000,
          },
        ],
      },
      reviews: [
        {
          id: 0,
          imgFiles: [],
          imgFileURLs: [],
          starRating: '⭐⭐⭐⭐⭐',
          title: '와!',
          contents:
            'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
          likes: 1,
          likesOfMe: false,
          comments: [
            {
              id: 0,
              writer: user,
              createAt: new Date(),
              contents: '굉장해요!',
            },
          ],
        },
      ],
    },
  ];

  const [posts, setPosts] = useState(DUMMY_LIST);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Header user={user} />
          <Component {...props} user={user} posts={posts} />
        </Wrap>
      )}
    />
  );
};

export default DefaultLayout;

const Wrap = styled.div`
  margin-top: 58px;
`;

const DUMMY_LIST = [
  {
    id: 0,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=A',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 1,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=B',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=B',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 2,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=C',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=C',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 3,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=D',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=D',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 4,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=E',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=E',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 5,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=F',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=F',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 6,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=G',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=G',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 7,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=H',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=H',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 8,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=I',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=I',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 9,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=J',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=J',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    id: 10,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=K',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/270x175.png?text=K',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      title: 'Lovely place!',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
];
