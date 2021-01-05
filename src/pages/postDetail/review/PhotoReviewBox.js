import React from 'react';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../../../components/profile/Profile';
import ImgCarousel, { CarouselUl } from '../../../components/carousel/imgCarousel/ImgCarousel';
import Stars from '../../../components/stars/Stars';
import useMoreContents from '../../../hooks/useMoreContents';

const PhotoReviewBox = ({ review }) => {
  const { viewMore, handleToggleBtnClick } = useMoreContents();

  return (
    <Wrap>
      <div className="leftBox">
        <Profile userData={review.writer} createAt={review.createAt} />
        <div className="starRating">
          <Stars rate={review.starRating} starsW={100} />
        </div>
        <p className="title">{review.title}</p>
        <p className={viewMore ? 'moreContents' : 'contents'}>{review.reviewContents}</p>
        <button className={viewMore ? 'hideBtn' : 'showBtn'} href="" onClick={handleToggleBtnClick}>
          ... 더보기
        </button>
      </div>
      <div className="rightBox">
        <ImgCarousel carouselData={review.files} mg={0} />
      </div>
    </Wrap>
  );
};

export default PhotoReviewBox;

const Wrap = styled.div`
  .leftBox {
    float: left;
    width: 65%;
    padding: 15px;

    ${ProfileWrap} {
      border-bottom: 1px solid ${(props) => props.theme.background[2]};
    }
    .starRating {
      margin-top: 30px;
    }
    .title {
      margin: 10px 0;
      font-size: 1.1rem;
      font-weight: bolder;
    }
    .contents {
      line-height: 1.7rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .moreContents {
      line-height: 1.7rem;
    }
    .showBtn {
      line-height: 1.6rem;
      font-size: 0.95rem;
      color: ${(props) => props.theme.color[1]};
    }
    .hideBtn {
      display: none;
    }
  }
  .rightBox {
    float: right;
    width: 35%;
    height: 220px;

    img {
      border-top-right-radius: 10px;
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .leftBox {
      float: none;
      width: 100%;
    }
    .rightBox {
      float: none;
      width: 100%;
      height: 300px;
      img {
        border-top-right-radius: 0;
      }
    }
  }
`;
