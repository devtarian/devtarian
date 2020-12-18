import React from 'react';
import styled from 'styled-components';
import Carousel from '../../../components/carousel/carousel/Carousel';
import SquareCarousel from '../../../components/carousel/squareCarousel/SquareCarousel';
import ReviewCarousel from '../../../components/carousel/reviewCarousel/ReviewCarousel';

const Section = () => {
  const mg = 9;
  return (
    <Wrap>
      <Carousel carouselData={DUMMY_LIST} mg={mg} />
      <Carousel carouselData={DUMMY_LIST} mg={mg} />
      <SquareCarousel mg={mg} />
      <ReviewCarousel carouselData={DUMMY_REVIEWS} mg={mg} />
    </Wrap>
  );
};

export default Section;

const Wrap = styled.section`
  overflow: hidden;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem 0;
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
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
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
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
];

const DUMMY_REVIEWS = [
  {
    id: 0,
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/365x235.png?text=A',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
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
      src: 'http://placehold.it/365x235.png?text=B',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=C',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=D',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=E',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=F',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=G',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=H',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=I',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=J',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
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
      src: 'http://placehold.it/365x235.png?text=K',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
];
