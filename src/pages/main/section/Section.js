import React, { useEffect } from 'react';
import styled from 'styled-components';
import Carousel from '../../../components/carousel/carousel/Carousel';
import CoverCarousel from '../../../components/carousel/coverCarousel/CoverCarousel';
import ReviewCarousel from '../../../components/carousel/reviewCarousel/ReviewCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../../redux/actions';
import Loading from '../../../components/loading/Loding';

const Section = () => {
  const dispatch = useDispatch();
  const { isFetching, data } = useSelector((state) => state.main);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(data);
  const mg = 9;
  useEffect(() => {
    let lat, lng;
    window.navigator.geolocation.getCurrentPosition((pos) => {
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
    });
    dispatch(mainActions.getMain({ lat, lng }));
  }, [dispatch, isLoggedIn]);

  if (isFetching) return <Loading />;

  return (
    <Wrap>
      <Carousel carouselData={data.store} mg={mg} isLoggedIn={isLoggedIn} />
      <Carousel carouselData={data.rated} mg={mg} isLoggedIn={isLoggedIn} />
      <CoverCarousel carouselData={data.wiki} mg={mg} isLoggedIn={isLoggedIn} />
      <ReviewCarousel carouselData={data.review} mg={mg} isLoggedIn={isLoggedIn} />
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
