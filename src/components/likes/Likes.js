import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LikesSvg } from '../../images/icons/smile.svg';

const Likes = ({ likesOfMe, onClickLike }) => {
  return (
    <LikesWrap>
      <LikesBtn likesofme={likesOfMe ? 'likes' : 'unlikes'} onClick={onClickLike} />
    </LikesWrap>
  );
};

export default React.memo(Likes);

export const LikesWrap = styled.button``;

export const LikesBtn = styled(LikesSvg)`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.likesofme === 'likes' ? props.theme.brown[2] : props.theme.color[0])};
  cursor: pointer;
`;
