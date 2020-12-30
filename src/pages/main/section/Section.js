import React from 'react';
import styled from 'styled-components';
import Carousel from '../../../components/carousel/carousel/Carousel';
import CoverCarousel from '../../../components/carousel/coverCarousel/CoverCarousel';
import ReviewCarousel from '../../../components/carousel/reviewCarousel/ReviewCarousel';

const Section = ({ posts, wikiPosts }) => {
  const mg = 9;
  return (
    <Wrap>
      <Carousel carouselData={posts} mg={mg} />
      <Carousel carouselData={posts} mg={mg} />
      <CoverCarousel carouselData={wikiPosts} mg={mg} />
      <ReviewCarousel carouselData={posts} mg={mg} />
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
