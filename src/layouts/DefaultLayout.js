import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';

const DefaultLayout = ({ component: Component, ...rest }) => {
  const [posts, setPosts] = useState(DUMMY_LIST);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Wrap>
          <Header />
          <Component {...props} posts={posts} />
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
