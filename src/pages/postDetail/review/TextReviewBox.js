import React from 'react';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../../../components/profile/Profile';
import Stars from '../../../components/stars/Stars';
import useMoreContents from '../../../hooks/useMoreContents';

const TextReviewBox = ({ review }) => {
  const { viewMore, handleToggleBtnClick } = useMoreContents();

  return (
    <Wrap>
      <Profile userData={review.writer} createAt={review.createAt} />
      <div className="starRating">
        <Stars rate={review.starRating} starsW={100} />
      </div>
      <p className="title">{review.title}</p>
      <p className={viewMore ? 'moreContents' : 'contents'}>{review.reviewContents}</p>
      <button className={viewMore ? 'hideBtn' : 'showBtn'} href="" onClick={handleToggleBtnClick}>
        ... 더보기
      </button>
    </Wrap>
  );
};

export default TextReviewBox;

const Wrap = styled.div`
  float: left;
  width: 100%;
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
`;
