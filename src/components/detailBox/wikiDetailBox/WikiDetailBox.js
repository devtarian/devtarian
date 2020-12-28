import React from 'react';
import styled from 'styled-components';
import ImgBox from '../ImgBox';
import WikiTextBox from './WikiTextBox';
import FavoriteHeart from '../../favoriteHeart/FavoriteHeart';

const WikiDetailBox = () => {
  return (
    <Wrap>
      <ImgBox />
      <WikiTextBox />
      <FavoriteHeart />
    </Wrap>
  );
};

export default WikiDetailBox;

const Wrap = styled.section`
  position: relative;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;
