import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { storeActions } from '../../redux/actions';
import history from '../../history';
import Stars from '../stars/Stars';
import FavoriteHeart, { FavoriteWrap } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';
import Svg from '../common/Svg';
import { translate } from '../../utils/helper';
import filterConfig from '../../config/filterConfig';

const ImgTextCard = React.forwardRef(({ className, storeData, onMouseOver, onMouseOut, onClickFavorite }, ref) => {
  const dispatch = useDispatch();
  const {
    id,
    favorite,
    info: { imgUrls, vegType, storeName, region, starRating, contents, category, address },
  } = storeData;
  const bg = filterConfig.category[category].color;

  const GetStoreDetail = () => {
    dispatch(storeActions.getStore(id));
    history.push(`/storeDetail/${id}`);
  };

  return (
    <Wrap className={className}>
      <ContentWrap onClick={GetStoreDetail} onMouseOver={onMouseOver} onMouseOut={onMouseOut} ref={ref}>
        <ItemImg bg={bg}>
          <img src={imgUrls[0] ? imgUrls[0] : noImg} alt="" />
          <div className="cover">
            <CircleSvg type={category} color="white" w="50px" h="50px" radius="50%" p="5px" />
            {category}
            <p>{address}</p>
          </div>
        </ItemImg>
        <TitleWrap>
          <span className="vegType">{translate(vegType)}</span>
          <h3 className="title">
            <a href="/">{storeName}</a>
          </h3>
        </TitleWrap>
        <strong className="region">{region}</strong>
        <div className="starRating">
          <Stars rate={starRating} starsW={80} />
        </div>
        <p className="contents">{contents}</p>
      </ContentWrap>
      <FavoriteHeart favorite={favorite} onFavoriteClick={onClickFavorite} />
    </Wrap>
  );
});

export default React.memo(ImgTextCard);

const Wrap = styled.div`
  position: relative;
  cursor: pointer;

  ${FavoriteWrap} {
    top: 10px;
    right: 10px;
  }
`;

export const ContentWrap = styled.div`
  .region {
    display: block;
    width: 100%;
    margin: 2px 0;
    font-size: 14px;
    color: ${(props) => props.theme.color[1]};
  }
  .starRating {
    overflow: hidden;
    li {
      margin: 0;
    }
  }
  .contents {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin-top: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ItemImg = styled.div`
  position: relative;
  width: 100%;
  height: 175px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .cover {
    z-index: 100;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${(props) => (props.bg ? props.bg : props.theme.green[1])};
    opacity: 0;
    transition: all 0.3s ease-in-out;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    color: white;
    font-weight: bold;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    p {
      margin-top: 10px;
      font-size: 0.9rem;
      font-weight: normal;
    }
  }

  &:hover .cover {
    opacity: 0.9;
  }
`;

const TitleWrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  .vegType {
    display: inline-block;
    width: 70px;
    height: 20px;
    line-height: 20px;
    margin-top: 3px;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;
    background: ${(props) => props.theme.green[1]};
    color: ${(props) => props.theme.background[0]};
  }
  .title {
    display: inline-block;
    width: 200px;
    margin: 0px;
    margin-left: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    font-size: 18px;
  }
`;

const CircleSvg = styled(Svg)`
  border: 3px solid white;
  margin-bottom: 5px;
`;
