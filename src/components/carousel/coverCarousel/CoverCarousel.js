import React, { useCallback } from 'react';
import styled from 'styled-components';
import ImgCard from '../../card/ImgCard';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';

import { useDispatch } from 'react-redux';
import { mainActions } from '../../../redux/actions';

const CoverCarousel = ({ carouselData, mg, isLoggedIn, handleFetchMoreData, fetchMore }) => {
  const dispatch = useDispatch();
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;

  const handleFavoriteClick = useCallback(
    (wiki) => {
      if (!isLoggedIn) {
        window.location = '/login';
      }
      wiki.favorite ? dispatch(mainActions.unFavoriteWiki(wiki.id)) : dispatch(mainActions.favoriteWiki(wiki.id));
    },
    [dispatch, isLoggedIn]
  );
  return (
    <CoverCarouselWrap>
      <h2>비건위키</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselData.map((data, index) => (
          <ImgCard
            key={index}
            data={data}
            value={value}
            ref={refCarouselLi}
            onFavoriteClick={() => handleFavoriteClick(data)}
          />
        ))}
      </CarouselUl>
      <CarouselBtn
        value={value}
        dataLength={carouselData.length}
        fetchMore={fetchMore}
        onCarouselBtnClick={onCarouselBtnClick}
        handleFetchMoreData={handleFetchMoreData}
      />
      <ViewAll to="/vegWiki" />
    </CoverCarouselWrap>
  );
};

export default CoverCarousel;

export const CoverCarouselWrap = styled.section`
  position: relative;
  height: 421px;
  margin-top: 40px;
  overflow: hidden;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
  ${CarouselBtnWrap} {
    top: 0px;
    height: 301px;
  }
`;

export const CarouselUl = styled.ul`
  position: absolute;
  left: ${(props) => props.value.leftPosition}px;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;
