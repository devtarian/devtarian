import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as EmptyHeartSvg } from '../../images/icons/heart_border-black.svg';
import { ReactComponent as FullHeartSvg } from '../../images/icons/heart-black.svg';

const FavoriteHeart = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteBtnClick = () => {
    setFavorite(!favorite);
  };

  const renderHeart = () => {
    return favorite ? <FullHeart /> : <EmptyHeart />;
  };
  return <Wrap onClick={handleFavoriteBtnClick}>{renderHeart()}</Wrap>;
};

export default FavoriteHeart;

const Wrap = styled.button`
  position: absolute;
  top: 86px;
  right: 0px;
`;

const EmptyHeart = styled(EmptyHeartSvg)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const FullHeart = styled(FullHeartSvg)`
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.brown[2]};
  cursor: pointer;
`;
