import styled from 'styled-components';
import history from '../../history';
import { useDispatch } from 'react-redux';
import storeActions from '../../redux/actions/storeActions';
import mainActions from '../../redux/actions/mainActions';
import Stars from '../stars/Stars';
import FavoriteHeart, { FavoriteWrap, EmptyHeart } from '../../components/favoriteHeart/FavoriteHeart';
import noImg from '../../images/noImg.jpg';

const ImgTextCard = ({ className, cardData }) => {
  const dispatch = useDispatch();
  const {
    id,
    favorite,
    imgUrl,
    info: { imgUrls, vegType, storeName, region, starRating, contents },
    coordinates: { _latitude, _longitude },
  } = cardData;

  const GetStoreDetail = () => {
    history.push(`/storeDetail/${id}`);
  };

  const onFavoriteClick = () => {
    favorite ? dispatch(storeActions.unFavoriteStore(id)) : dispatch(storeActions.favoriteStore(id));
    dispatch(mainActions.getMain({ lat: _latitude, lng: _longitude }));
  };

  return (
    <ImgTextCardWrap className={className} onClick={GetStoreDetail}>
      <ItemImg>
        <img src={imgUrl ? imgUrl : noImg} alt="" />
        <div className="cover"></div>
      </ItemImg>
      <span className="vegType">{vegType}</span>
      <h3 className="title">{storeName}</h3>
      <strong className="region">{region}</strong>
      <div className="starRating">
        <Stars rate={starRating} starsW={80} />
      </div>
      <p className="contents">{cardData.contents ? cardData.contents : ''}</p>
      <FavoriteHeart onFavoriteClick={onFavoriteClick} favorite={favorite} />
    </ImgTextCardWrap>
  );
};

export default ImgTextCard;

export const ImgTextCardWrap = styled.div`
  position: relative;
  cursor: pointer;

  .vegType {
    display: inline-block;
    width: 70px;
    padding: 2px 4px;
    border-radius: 4px;
    text-align: center;
    font-size: 12px;
    background: ${(props) => props.theme.brown[1]};
    color: ${(props) => props.theme.background[0]};
  }
  .title {
    display: inline-block;
    margin-left: 0.3rem;
    overflow: hidden;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    color: ${(props) => props.theme.green[1]};
  }

  .region {
    display: block;
    width: 100%;
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

  ${FavoriteWrap} {
    top: 10px;
    right: 10px;
  }
  ${EmptyHeart} {
    fill: ${(props) => props.theme.color[2]};
  }
`;

export const ItemImg = styled.div`
  position: relative;
  width: 270px;
  height: 175px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .cover {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.green[1]};
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover .cover {
    opacity: 0.8;
  }
`;
