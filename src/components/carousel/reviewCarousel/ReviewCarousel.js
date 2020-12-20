import React from 'react';
import styled from 'styled-components';
import Profile from '../../profile/Profile';
import ImgTextCard, { ImgTextCardWrap, ItemImg } from '../../card/ImgTextCard';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';
import useCarousel from '../../../hooks/useCarousel';

const ReviewCarousel = ({ carouselData, mg }) => {
  const { value, onCarouselBtnClick } = useCarousel(mg);
  const { refCarouselUl, refCarouselLi } = value;

  return (
    <Wrap>
      <h2>새로운 리뷰</h2>
      <CarouselUl ref={refCarouselUl} value={value}>
        {carouselData.map((data) => (
          <li key={data.id} ref={refCarouselLi}>
            <Profile userData={data.user} />
            <ImgTextCard cardData={data.review} />
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
    img {
      width: 365px;
      height: 235px;
    }
  }
  ${ImgTextCardWrap} {
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
