import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import PostTextBox from './PostTextBox';
import FavoritesHeart from '../../favoritesHeart/FavoritesHeart';

const PostDetailBox = () => {
  return (
    <Wrap>
      <ImgBox />
      <PostTextBox />
      <FavoritesHeart />
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
