import React from 'react';
import styled from 'styled-components';
import Svg from '../common/Svg';

const Likes = ({ className, likesOfMe, onClickLike }) => {
  return (
    <LikesWrap className={className}>
      <Svg type="smile" w="20px" h="20px" color={likesOfMe ? '#e08d60' : '#111'} onClick={onClickLike} />
    </LikesWrap>
  );
};

export default React.memo(Likes);

const LikesWrap = styled.button``;
