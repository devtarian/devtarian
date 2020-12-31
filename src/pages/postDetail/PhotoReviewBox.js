import React from 'react';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../../components/profile/Profile';
import ImgCarousel from '../../components/carousel/imgCarousel/ImgCarousel';
import Stars from '../../components/stars/Stars';

const PhotoReviewBox = ({ review }) => {
  return (
    <Wrap>
      <div className="leftBox">
        <Profile userData={review.writer} createAt={review.createAt} />
        <div className="starRating">
          <Stars rate={review.starRating} starsW={100} />
        </div>
        <p className="title">{review.title}</p>
        <p className="contents">{review.reviewContents}</p>
        <button className="viewMore" href="">
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
    .viewMore {
      line-height: 1.6rem;
      font-size: 0.95rem;
      color: ${(props) => props.theme.color[1]};
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
`;
