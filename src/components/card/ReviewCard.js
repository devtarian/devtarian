import React from 'react';
import styled from 'styled-components';
import history from '../../history';
import Stars from '../stars/Stars';
import Likes, { LikesWrap, LikesBtn } from '../likes/Likes';
import noImg from '../../images/noImg.jpg';
import { translate } from '../../utils/helper';

const ReviewCard = ({ cardData, onClickLike }) => {
  const {
    storeId,
    imgUrl,
    likesOfMe,
    info: { vegType, storeName, region, starRating },
  } = cardData;

  return (
    <Wrap>
      <ReviewCardWrap onClick={() => history.push(`/storeDetail/${storeId}`)}>
        <ItemImg>
          <img src={imgUrl ? imgUrl : noImg} alt="" />
          <div className="cover"></div>
        </ItemImg>
        <span className="vegType">{translate(vegType)}</span>
        <h3 className="title">{storeName}</h3>
        <strong className="region">{region}</strong>
        <div className="starRating">
          <Stars rate={starRating} starsW={80} />
        </div>
        <p className="contents">{cardData.contents ? cardData.contents : ''}</p>
      </ReviewCardWrap>
      <StyledLikes likesOfMe={likesOfMe} onClickLike={onClickLike} />
    </Wrap>
  );
};

export default ReviewCard;

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledLikes = styled(Likes)`
  z-index: 101;
  position: absolute;
  top: 10px;
  right: 10px;

  svg {
    width: 25px;
    height: 25px;
  }
`;
export const ReviewCardWrap = styled.div`
  .vegType {
    display: inline-block;
    width: 70px;
    height: 20px;
    line-height: 20px;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;
    background: ${(props) => props.theme.green[1]};
    color: ${(props) => props.theme.background[0]};
  }
  .title {
    display: inline-block;
    margin-top: -1px;
    margin-left: 0.3rem;
    overflow: hidden;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    color: ${(props) => props.theme.color[0]};
  }

  .region {
    display: block;
    width: 100%;
    margin: 2px 0;
    font-size: 14px;
    color: ${(props) => props.theme.color[1]};
  }
  .starRating {
    overflow: hidden;
    li {
      margin: 0;
    }
  }
  .contents {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin-top: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ItemImg = styled.div`
  position: relative;
  width: 365px;
  height: 235px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .cover {
    z-index: 100;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.green[1]};
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover .cover {
    opacity: 0.8;
  }
`;
