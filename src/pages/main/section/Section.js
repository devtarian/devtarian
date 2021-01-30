import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import history from '../../../history';
import Carousel from '../../../components/carousel/carousel/Carousel';
import CoverCarousel from '../../../components/carousel/coverCarousel/CoverCarousel';
import ReviewCarousel from '../../../components/carousel/reviewCarousel/ReviewCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { mainActions } from '../../../redux/actions';
import Loading from '../../../components/loading/Loding';

const Section = () => {
  const dispatch = useDispatch();
  const query = queryString.parse(history.location.search);
  const { lat, lng } = query;
  const { isFetching, store, rated, wiki, review } = useSelector((state) => state.main);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const mg = 9;
  useEffect(() => {
    if (lat || lng) return;
    window.navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      window.location = `?lat=${latitude}&lng=${longitude}`;
    });
  }, [lat, lng]);

  useEffect(() => {
    dispatch(mainActions.getMain({ lat, lng }));
  }, [dispatch, isLoggedIn, lat, lng]);

  const handleFetchMoreData = useCallback(
    (type) => {
      dispatch(mainActions.fetchMore({ ...query, type }));
    },
    [dispatch, query]
  );

  if (isFetching) return <Loading />;

  return (
    <Wrap>
      <Carousel
        carouselData={store.data}
        mg={mg}
        numOfslides={4}
        handleFetchMoreData={() => handleFetchMoreData('store')}
        fetchMore={store.fetchMore}
        isLoggedIn={isLoggedIn}
        title="근처의 비건식당"
      />
      <Carousel
        carouselData={rated.data}
        mg={mg}
        numOfslides={4}
        handleFetchMoreData={() => {}}
        fetchMore={rated.fetchMore}
        isLoggedIn={isLoggedIn}
        title="비건식당 Top 10"
      />
      <CoverCarousel
        carouselData={wiki.data}
        mg={mg}
        numOfslides={4}
        handleFetchMoreData={() => handleFetchMoreData('wiki')}
        fetchMore={wiki.fetchMore}
        isLoggedIn={isLoggedIn}
      />
      <ReviewCarousel
        carouselData={review.data}
        mg={mg}
        numOfslides={3}
        handleFetchMoreData={() => handleFetchMoreData('review')}
        fetchMore={review.fetchMore}
        isLoggedIn={isLoggedIn}
      />
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
