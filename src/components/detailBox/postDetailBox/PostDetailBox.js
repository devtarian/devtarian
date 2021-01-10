import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import PostTextBox from './PostTextBox';
import FavoriteHeart, { FavoriteWrap } from '../../favoriteHeart/FavoriteHeart';

const PostDetailBox = ({ post }) => {
  const {
    store: { category, vegType, storeName },
  } = post;
  return (
    <Wrap>
      <div className="show">
        <div className="tags">
          <span className="storeCategory hide">{category}</span>
          <span className="vegType hide">{vegType}</span>
        </div>
        <h2 className="store">{storeName}</h2>
      </div>
      <ImgBox data={post.store} />
      <PostTextBox post={post} />
      <div className="heartWrap">
        <FavoriteHeart data={post} />
      </div>
    </Wrap>
  );
};

export default PostDetailBox;

const Wrap = styled.section`
  position: relative;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
  .show {
    display: none;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  .tags {
    overflow: hidden;

    .vegType {
      float: left;
      max-width: 80px;
      padding: 1px 4px;
      margin-left: 0.4rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.brown[1]};
      text-align: center;
      font-size: 13px;
      color: ${(props) => props.theme.brown[1]};
    }
    .storeCategory {
      float: left;
      max-width: 70px;
      padding: 1px 4px;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.color[1]};
      text-align: center;
      font-size: 13px;
      color: ${(props) => props.theme.color[1]};
    }
  }
  .store {
    margin: 0px 0px 10px;
    font-size: 60px;
  }
  @media (max-width: 767px) {
    padding: 0 1.5rem;
    .show {
      display: block;
    }
    .heartWrap {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      ${FavoriteWrap} {
        top: 0px;
        right: 10px;
      }
    }
  }
`;
