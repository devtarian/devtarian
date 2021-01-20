import React, { useCallback } from 'react';
import styled from 'styled-components';
import WriterProfile from '../../profile/WriterProfile';
import ReviewCard, { ReviewCardWrap, ItemImg } from '../../card/ReviewCard';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';
import { useDispatch } from 'react-redux';
import { mainActions } from '../../../redux/actions';

const ReviewCarousel = ({ carouselData, mg, isLoggedIn }) => {
  const dispatch = useDispatch();
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;

  const handleClickLike = useCallback(
    (review) => {
      const { storeId, id, likesOfMe } = review;
      if (!isLoggedIn) {
        window.location = '/login';
      }

      likesOfMe ? dispatch(mainActions.unLikeReview(storeId, id)) : dispatch(mainActions.likeReview(storeId, id));
    },
    [dispatch, isLoggedIn]
  );

  return (
    <Wrap>
      <h2>새로운 리뷰</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselData.map((data, index) => (
          <li key={index} ref={refCarouselLi}>
            <WriterProfile writer={data.writer} createdAt={data.createdAt} />
            <ReviewCard cardData={data} onClickLike={() => handleClickLike(data)} />
          </li>
        ))}
      </CarouselUl>
      <CarouselBtn value={value} onCarouselBtnClick={onCarouselBtnClick} />
      <ViewAll />
    </Wrap>
  );
};

export default ReviewCarousel;

const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }

  ${ItemImg} {
    width: 365px;
    height: 235px;
  }
  ${ReviewCardWrap} {
    p {
      -webkit-line-clamp: 2;
    }
  }

  ${CarouselBtnWrap} {
    top: 56px;
    height: 235px;
  }
`;

const CarouselUl = styled.ul`
  width: ${(props) => (props.value.liClientWidth + props.value.liSideMargin * 2) * props.value.liLength}px;
  position: absolute;
  left: ${(props) => props.value.leftPosition}px;
  transition: all 0.3s ease;

  li {
    float: left;
    width: 366px;
    margin: 0 ${(props) => props.value.liSideMargin}px 40px;
  }
`;
