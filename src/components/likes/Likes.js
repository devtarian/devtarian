import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import storeActions from '../../redux/actions/storeActions';
import { ReactComponent as smileSvg } from '../../images/icons/emoji_smile.svg';

const Likes = ({ storeId, reviewId, likes }) => {
  const dispatch = useDispatch();
  const handleLikesClick = (e) => {
    e.preventDefault();
    likes
      ? dispatch(storeActions.unLikeReview(storeId, reviewId))
      : dispatch(storeActions.likeReview(storeId, reviewId));
  };

  return (
    <Wrap>
      <Smile likes={likes} onClick={handleLikesClick} />
    </Wrap>
  );
};

export default Likes;

const Wrap = styled.div``;

const Smile = styled(smileSvg)`
  width: 21px;
  height: 21px;
  fill: ${(props) => (props.likes ? props.theme.brown[2] : props.theme.color[0])};
  cursor: pointer;
`;
