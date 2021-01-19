import React from 'react';
import styled from 'styled-components';
import WriterProfile, { WriterProfileWrap } from '../../../components/profile/WriterProfile';
import Stars from '../../../components/stars/Stars';
import useMoreContent from '../../../hooks/useMoreContent';

const TextReviewBox = ({ reviewData }) => {
  const { writer, createdAt, starRating, title, contents } = reviewData;
  const { content, isTextOver, handleViewMoreClick } = useMoreContent(contents, 109);

  return (
    <Wrap>
      <WriterProfile writer={writer} createdAt={createdAt} />
      <div className="starRating">
        <Stars rate={starRating} starsW={100} />
      </div>
      <p className="title">{title}</p>
      <p className="contents">{content}</p>
      <button className={isTextOver ? 'showBtn' : 'hideBtn'} href="" onClick={handleViewMoreClick}>
        더보기
      </button>
    </Wrap>
  );
};

export default TextReviewBox;

const Wrap = styled.div`
  float: left;
  width: 100%;
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
`;
