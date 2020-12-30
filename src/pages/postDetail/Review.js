import React from 'react';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../../components/profile/Profile';
import Comment from '../../components/comment/Comment';
import Stars from '../../components/stars/Stars';
import { ReactComponent as LikeSvg } from '../../images/icons/heart_border-black.svg';
import { ReactComponent as CommentSvg } from '../../images/icons/insert_comment.svg';
import noImg from '../../images/noImg.jpg';
import noProfile from '../../images/noProfile.png';

const Review = ({ reviewList }) => {
  return (
    <Wrap>
      <strong className="totalReviews">{reviewList.length} 개의 리뷰</strong>
      {reviewList.map((review) => (
        <div className="review" key={review.id}>
          <div className="innerWrap">
            <div className="leftBox">
              <Profile userData={review.writer} createAt={review.createAt} />
              <div className="starRating">
                <Stars rate={review.starRating} starsW={100} />
              </div>
              <p className="title">{review.title}</p>
              <p className="contents">{review.reviewContents}</p>
              <a className="viewMore" href="">
                ... 더보기
              </a>
            </div>
            <div className="rightBox">
              <img className="photos" src={review.files[0] ? URL.createObjectURL(review.files[0]) : noImg} alt="" />
            </div>
          </div>
          <div className="reactions">
            <div className="addLikes">
              <i>
                <LikeBtn />
              </i>
              <span>+{review.likes}</span>
            </div>
            <div className="addComments">
              <i>
                <CommentBtn />
              </i>
              <span>+{review.comments}</span>
            </div>
          </div>
          <ul className="comments">
            {review.commentList.map((comment) => (
              <Comment key={comment.id} data={comment} />
            ))}
          </ul>
          <div className="writeComments">
            <img
              className="userThumbnail"
              src={review.files[0] ? URL.createObjectURL(review.files[0]) : noProfile}
              alt=""
            />

            <form>
              <label>댓글달기</label>
              <input placeholder="댓글을 입력하세요."></input>
            </form>
          </div>
        </div>
      ))}
    </Wrap>
  );
};

export default Review;

const Wrap = styled.section`
  margin-top: 50px;

  .totalReviews {
    display: block;
    margin-bottom: 50px;
  }

  .review {
    width: 768px;
    margin: 0 auto;
    margin-bottom: 25px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.background[1]};
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  .innerWrap {
    overflow: hidden;

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
    padding: 0px 15px;
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
        width: 690px;
        margin-top: 0px;
        padding: 8px 10px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.background[0]};
        font-size: 0.8rem;
        color: ${(props) => props.theme.color[2]};
      }
    }
  }
`;

const LikeBtn = styled(LikeSvg)`
  width: 20px;
  height: 20px;
`;

const CommentBtn = styled(CommentSvg)`
  width: 20px;
  height: 20px;
`;
