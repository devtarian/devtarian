import React, { useEffect } from 'react';
import styled from 'styled-components';
import Carousel from '../../../components/carousel/carousel/Carousel';
import CoverCarousel from '../../../components/carousel/coverCarousel/CoverCarousel';
import ReviewCarousel from '../../../components/carousel/reviewCarousel/ReviewCarousel';
import { useDispatch, useSelector } from 'react-redux';
import mainActions from '../../../redux/actions/mainActions';
import Loading from '../../../components/loading/Loding';

const Section = (wikiPosts) => {
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector((state) => state.main);
  const mg = 9;
  useEffect(() => {
    dispatch(mainActions.getMain({ lat: 33.450701, lng: 126.570667 }));
  }, [dispatch]);

  if (isFetching) return <Loading />;

  return (
    <Wrap>
      <Carousel carouselData={data} mg={mg} />
      <Carousel carouselData={data} mg={mg} />
      <CoverCarousel carouselData={wikiPosts} mg={mg} />
      <ReviewCarousel carouselData={data} mg={mg} />
    </Wrap>
  );
};

export default Section;

const Wrap = styled.section`
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem 0;
`;
