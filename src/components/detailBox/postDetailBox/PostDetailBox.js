import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import PostTextBox from './PostTextBox';
import FavoriteHeart from '../../favoriteHeart/FavoriteHeart';

const PostDetailBox = ({ posts }) => {
  return (
    <Wrap>
      <ImgBox posts={posts} />
      <PostTextBox posts={posts} />
      <FavoriteHeart posts={posts} />
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
