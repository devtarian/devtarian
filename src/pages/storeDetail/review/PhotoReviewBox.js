import React from 'react';
import styled from 'styled-components';
import WriterProfile, { WriterProfileWrap } from '../../../components/profile/WriterProfile';
import ImgCarousel from '../../../components/carousel/imgCarousel/ImgCarousel';
import Stars from '../../../components/stars/Stars';
import useMoreContents from '../../../hooks/useMoreContents';

const PhotoReviewBox = ({ reviewData }) => {
  const { viewMore, handleToggleBtnClick } = useMoreContents();
  const { starRating, title, contents, imgUrl, createdAt, writer } = reviewData;

  return (
    <Wrap>
      <div className="leftBox">
        <WriterProfile writer={writer} createdAt={createdAt} />
        <div className="starRating">
          <Stars rate={starRating} starsW={100} />
        </div>
        <p className="title">{title}</p>
        <p className={viewMore ? 'moreContents' : 'contents'}>{contents}</p>
        <button className={viewMore ? 'hideBtn' : 'showBtn'} href="" onClick={handleToggleBtnClick}>
          ... 더보기
        </button>
      </div>
      <div className="rightBox">
        {Array.isArray(imgUrl) ? (
          <ImgCarousel carouselData={imgUrl} />
        ) : (
          <img className="imgContainer" src={imgUrl} alt="" />
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
