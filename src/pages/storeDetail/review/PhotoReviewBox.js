import React from 'react';
import styled from 'styled-components';
import WriterProfile, { WriterProfileWrap } from '../../../components/profile/WriterProfile';
import ImgCarousel from '../../../components/carousel/imgCarousel/ImgCarousel';
import Stars from '../../../components/stars/Stars';
import useMoreContent from '../../../hooks/useMoreContent';

const PhotoReviewBox = ({ reviewData }) => {
  const { starRating, title, contents, imgUrls, createdAt, writer } = reviewData;
  const { content, isTextOver, handleViewMoreClick } = useMoreContent(contents, 70);
  console.log(reviewData);
  return (
    <Wrap>
      <div className="leftBox">
        <WriterProfile writer={writer} createdAt={createdAt} />
        <div className="starRating">
          <Stars rate={starRating} starsW={100} />
        </div>
        <p className="title">{title}</p>
        <p className="contents">{content}</p>
        <button className={isTextOver ? 'showBtn' : 'hideBtn'} href="" onClick={handleViewMoreClick}>
          더보기
        </button>
      </div>
      <div className="rightBox">
        {Array.isArray(imgUrls) ? (
          <ImgCarousel carouselData={imgUrls} />
        ) : (
          <img className="imgContainer" src={imgUrls} alt="" />
        )}
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

    ${WriterProfileWrap} {
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
      word-break: break-all;
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
      height: 100%;
      object-fit: cover;
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
