import React from 'react';
import styled from 'styled-components';
import Svg from '../common/Svg';

const FavoriteHeart = ({ onFavoriteClick, favorite }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    onFavoriteClick();
  };

  const renderHeart = () => {
    return favorite ? (
      <Svg type="fullHeart" w="25px" h="25px" color="#e08d60" />
    ) : (
      <Svg type="emptyHeart" w="25px" h="25px" coloc="#111" />
    );
  };
  return <FavoriteWrap onClick={handleFavoriteClick}>{renderHeart()}</FavoriteWrap>;
};

export default React.memo(FavoriteHeart);

export const FavoriteWrap = styled.button`
  z-index: 101;
  position: absolute;
  top: 86px;
  right: 0px;
`;
