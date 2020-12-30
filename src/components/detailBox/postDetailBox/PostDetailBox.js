import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import PostTextBox from './PostTextBox';
import FavoriteHeart from '../../favoriteHeart/FavoriteHeart';

const PostDetailBox = ({ post }) => {
  return (
    <Wrap>
      <ImgBox data={post.store} />
      <PostTextBox post={post} />
      <FavoriteHeart data={post} />
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
`;
