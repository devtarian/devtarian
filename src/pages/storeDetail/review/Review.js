import React, { useCallback } from 'react';
import styled from 'styled-components';
import PhotoReviewBox from './PhotoReviewBox';
import TextReviewBox from './TextReviewBox';
import Comment from './Comment';
import Likes from '../../../components/likes/Likes';

import { useSelector, useDispatch } from 'react-redux';
import { storeActions } from '../../../redux/actions';
import Svg from '../../../components/common/Svg';

const Review = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const { id, reviews, reviewList } = useSelector((state) => state.store.data);

  const handleClickLike = useCallback(
    (review) => {
      const { storeId, id, likesOfMe } = review;
      if (!isLoggedIn) {
        window.location = '/login';
      }

      likesOfMe ? dispatch(storeActions.unLikeReview(storeId, id)) : dispatch(storeActions.likeReview(storeId, id));
    },
    [dispatch, isLoggedIn]
  );

  return (
    <Wrap>
      <strong className="totalReviews">{reviews} 개의 리뷰</strong>
      {reviewList.map((review) => (
        <div className="review" key={review.id}>
          <div className="innerWrap">
            {review.imgUrls.length > 0 ? <PhotoReviewBox reviewData={review} /> : <TextReviewBox reviewData={review} />}
          </div>
          <div className="reactions">
            <div className="addLikes">
              <Likes likesOfMe={review.likesOfMe} onClickLike={() => handleClickLike(review)} />
              <span>+{review.likes}</span>
            </div>
            <div className="addComments">
              <Svg type="insertComment" w="20px" h="20px" />
              <span>+{review.comments}</span>
            </div>
          </div>
          <Comment storeId={id} reviewId={review.id} />
        </div>
      ))}
    </Wrap>
  );
};

export default Review;

const Wrap = styled.section`
  margin: 100px auto 0;
  padding: 0 1.5rem;

  .totalReviews {
    display: block;
    margin-bottom: 50px;
  }

  .review {
    width: 100%;
    max-width: 768px;
    margin: 0 auto 25px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.background[1]};
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  .innerWrap {
    overflow: hidden;
  }
  .reactions {
    margin: 0 10px;
    padding: 7px 10px;
    border-top: 1px solid ${(props) => props.theme.background[2]};
    border-bottom: 1px solid ${(props) => props.theme.background[2]};
    overflow: hidden;
    * {
      float: left;
    }

    div + div {
      margin-left: 1.3rem;
    }
    span {
      padding-left: 0.15rem;
      font-size: 0.85rem;
      letter-spacing: -1px;
    }
    span + span {
      margin-left: 0.25rem;
    }
  }
  .comments {
    overflow: hidden;
  }
  .writeComments {
    padding: 5px 15px;
    overflow: hidden;
    .userThumbnail {
      float: left;
      width: 40px;
      height: 40px;
      margin: 2px 8px 0 0;
      border-radius: 50%;
    }
    form {
      float: left;
      padding: 5px 0;
      label {
        display: none;
      }
      input {
        margin-top: 0px;
        padding: 8px 10px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.background[0]};
        font-size: 0.8rem;
        color: ${(props) => props.theme.color[2]};
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 170px;
  }
`;
