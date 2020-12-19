import React from 'react';
import styled from 'styled-components';
import Profile, { ProfileWrap } from '../../components/profile/Profile';

const Review = ({ posts }) => {
  return (
    <Wrap>
      <strong>{posts.length} 개의 리뷰</strong>
      {posts.map((post) => (
        <div className="review" key={post.id}>
          <div className="innerWrap">
            <div className="leftBox">
              <Profile userData={post.user} />
              <p className="starRating">{post.review.starRating}</p>
              <p className="title">{post.review.title}</p>
              <p className="contents">{post.review.contents}</p>
              <a className="viewMore" href="">
                ... 더보기
              </a>
            </div>
            <div className="rightBox">
              <img className="photos" src={post.review.src} alt="" />
            </div>
          </div>
          <div className="reactions">
            <span className="addLikes">좋아요 +5</span>
            <span className="addComments">댓글달기 +3</span>
          </div>
          <ul className="comments">
            <li>
              <Profile userData={post.user} />
              <p className="comment">놀라워요!</p>
            </li>
            <li>
              <Profile userData={post.user} />
              <p className="comment">놀라워요!</p>
            </li>
          </ul>
          <div className="writeComments">
            <img className="userThumbnail" src="http://placehold.it/40x40.png?text=a" alt="" />

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

  strong {
    display: block;
    margin-bottom: 15px;
  }

  .review {
    margin-bottom: 30px;
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
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid ${(props) => props.theme.background[2]};

        span {
          margin-top: -13px;
        }
      }

      .title {
        margin: 10px 0;
        font-size: 1.1rem;
        font-weight: bolder;
      }
      .contents {
        line-height: 1.5rem;
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

      img {
        width: 100%;
      }
    }
  }
  .reactions {
    margin: 0 10px;
    padding: 7px 15px;
    border-top: 1px solid ${(props) => props.theme.background[2]};
    border-bottom: 1px solid ${(props) => props.theme.background[2]};

    span {
      font-size: 0.88rem;
    }
    span + span {
      margin-left: 1rem;
    }
  }

  .comments {
    padding: 0px 15px;
    overflow: hidden;

    li {
      padding: 5px 0 10px;
      overflow: hidden;
      border-bottom: 1px solid ${(props) => props.theme.background[2]};

      ${ProfileWrap} {
        margin: 0 8px 0 0;

        span {
          margin-top: -13px;
        }
        a {
          color: ${(props) => props.theme.color[0]};
        }
      }
    }
    .comment {
      margin-top: 9px;
      padding-left: 47px;
    }
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
        width: 1120px;
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
