import styled from 'styled-components';
import noImg from '../../images/noImg.jpg';

const ImgTextCard = ({ cardData }) => {
  const {
    store: { files, vegType, storeName, region, starRating },
    reviewList: {
      0: { reviewContents },
    },
  } = cardData;

  return (
    <ImgTextCardWrap>
      <ItemImg>
        <img src={files[0] ? URL.createObjectURL(files[0]) : noImg} alt="" />
        <div className="cover"></div>
      </ItemImg>
      <span className="vegOptions">{vegType}</span>
      <h3 className="title">
        <a href="/">{storeName}</a>
      </h3>
      <strong className="region">{region}</strong>
      <span className="starRating">{starRating}</span>
      <p>{reviewContents}</p>
    </ImgTextCardWrap>
  );
};

export default ImgTextCard;

export const ImgTextCardWrap = styled.div`
  .vegOptions {
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
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    color: ${(props) => props.theme.green[1]};
  }
  .title a {
    margin-left: 0.3rem;
    font-size: 18px;
    color: ${(props) => props.theme.green[1]};
  }
  .region {
    display: block;
    width: 100%;
    color: ${(props) => props.theme.color[1]};
  }
  .starRating {
    width: 100%;
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
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
    z-index: 100;
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
