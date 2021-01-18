import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import storeActions from '../../redux/actions/storeActions';
import mainActions from '../../redux/actions/mainActions';
import { ReactComponent as LikesSvg } from '../../images/icons/smile.svg';

const Likes = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { storeId, reviewId, likesOfMe } = props;

  const handleLikesClick = (e) => {
    e.preventDefault();
    likesOfMe
      ? dispatch(storeActions.unLikeReview(storeId, reviewId))
      : dispatch(storeActions.likeReview(storeId, reviewId));
    dispatch(mainActions.getMain({ lat: 37.573, lng: 126.9794 }));
  };

  return (
    <LikesWrap>
      <LikesBtn likesofme={likesOfMe ? 'likes' : 'unlikes'} ref={ref} onClick={handleLikesClick} />
    </LikesWrap>
  );
});

export default Likes;

export const LikesWrap = styled.button``;

export const LikesBtn = styled(LikesSvg)`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.likesofme === 'likes' ? props.theme.brown[2] : props.theme.color[0])};
  cursor: pointer;
`;
