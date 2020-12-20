import styled from 'styled-components';

const ImgTextCard = ({ cardData }) => {
  const { src, type, storeName, region, starRating, contents } = cardData;

  return (
    <ImgTextCardWrap>
      <ItemImg>
        <img src={src} alt="" />
        <div className="cover"></div>
      </ItemImg>
      <i className="vegOptions">{type}</i>
      <h3 className="title">
        <a href="/">{storeName}</a>
      </h3>
      <strong className="region">{region}</strong>
      <span className="starRating">{starRating}</span>
      <p>{contents}</p>
    </ImgTextCardWrap>
  );
};

export default ImgTextCard;

export const ImgTextCardWrap = styled.div`
  .vegOptions {
    float: left;
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
  .title a {
    width: calc(100% - 24px);
    float: left;
    margin-left: 0.25rem;
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
  margin-bottom: 10px;

  img {
    width: 270px;
    height: 175px;
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
