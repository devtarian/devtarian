import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EmptyHeartSvg } from '../../images/icons/heart_border-black.svg';
import { ReactComponent as FullHeartSvg } from '../../images/icons/heart-black.svg';

const FavoriteHeart = ({ onFavoriteClick, favorite }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    onFavoriteClick();
  };

  const renderHeart = () => {
    return favorite ? <FullHeart /> : <EmptyHeart />;
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

export const EmptyHeart = styled(EmptyHeartSvg)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const FullHeart = styled(FullHeartSvg)`
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.brown[2]};
  cursor: pointer;
`;
