import React, { useCallback } from 'react';
import styled from 'styled-components';
import ImgTextCard from '../../card/ImgTextCard';
import CarouselBtn from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';
import { useDispatch } from 'react-redux';
import { mainActions } from '../../../redux/actions';

const Carousel = ({ carouselData, isLoggedIn, title, mg, handleFetchMoreData, fetchMore, numOfslides }) => {
  const dispatch = useDispatch();
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;

  const handleClickFavorite = useCallback(
    (store) => {
      if (!isLoggedIn) {
        window.location = '/login';
      }
      store.favorite ? dispatch(mainActions.unFavorite(store.id)) : dispatch(mainActions.favorite(store.id));
    },
    [isLoggedIn, dispatch]
  );

  return (
    <Wrap>
      <h2>{title}</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselData.map((data, index) => (
          <li key={index} ref={refCarouselLi}>
            <ImgTextCard storeData={data} onClickFavorite={() => handleClickFavorite(data)} />
          </li>
        ))}
      </CarouselUl>
      <CarouselBtn
        value={value}
        dataLength={carouselData.length}
        fetchMore={fetchMore}
        onCarouselBtnClick={onCarouselBtnClick}
        handleFetchMoreData={handleFetchMoreData}
        numOfslides={numOfslides}
      />
      <ViewAll to="/" />
    </Wrap>
  );
};

export default Carousel;

const Wrap = styled.section`
  position: relative;
  height: 374px;
  margin-top: 40px;
  overflow: hidden;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const CarouselUl = styled.ul`
  width: 100%;
  position: absolute;
  left: ${(props) => props.value.leftPosition}px;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;

  li {
    float: left;
    width: 270px;
    margin: 0 ${(props) => props.value.liSideMargin}px;
  }
`;
