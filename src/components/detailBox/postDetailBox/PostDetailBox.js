import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import PostTextBox from './PostTextBox';
import FavoriteHeart, { FavoriteWrap } from '../../favoriteHeart/FavoriteHeart';

const PostDetailBox = ({ post }) => {
  const {
    store: { vegType, storeName },
  } = post;
  return (
    <Wrap>
      <div className="show">
        <span className="vegType">{vegType}</span>
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
  margin-top: 58px;
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
  .vegType {
    max-width: 80px;
    padding: 1px 4px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.brown[1]};
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.theme.brown[1]};
  }
  .store {
    margin: 0px 0px 10px;
    font-size: 60px;
  }
  @media (max-width: 767px) {
    position: relative;
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
