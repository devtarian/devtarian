import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as EmptyHeartSvg } from '../../images/icons/heart_border-black.svg';
import { ReactComponent as FullHeartSvg } from '../../images/icons/heart-black.svg';

const FavoritesHeart = () => {
  const [favorites, setFavorites] = useState(false);

  const handleFavoriteBtnClick = () => {
    setFavorites(!favorites);
  };

  const renderHeart = () => {
    return favorites ? <FullHeart /> : <EmptyHeart />;
  };
  return <Wrap onClick={handleFavoriteBtnClick}>{renderHeart()}</Wrap>;
};

export default FavoritesHeart;

const Wrap = styled.button`
  position: absolute;
  top: 86px;
  right: 73px;
`;

const EmptyHeart = styled(EmptyHeartSvg)`
  width: 25px;
  height: 25px;
`;

const FullHeart = styled(FullHeartSvg)`
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.brown[2]};
`;
