import styled from 'styled-components';
import Carousel from '../carousel/carousel/Carousel';
import SquareCarousel from '../carousel/squareCarousel/SquareCarousel';
import ReviewCarousel from '../carousel/reviewCarousel/ReviewCarousel';
import Footer from '../footer/Footer';

const Main = () => {
  return (
    <Wrap>
      <Carousel carouselInfo={DUMMY_LIST} />
      <Carousel carouselInfo={DUMMY_LIST} />
      <SquareCarousel />
      <ReviewCarousel carouselInfo={DUMMY_REVIEWS} />
      <Footer />
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
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
    id: 2,
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
    id: 3,
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
    id: 2,
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
];
