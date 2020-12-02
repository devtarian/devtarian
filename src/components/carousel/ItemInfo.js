import styled from 'styled-components';

const ItemInfo = ({ itemInfo, width, height, webkitLineClamp }) => {
  const { src, type, storeName, region, starRating, contents } = itemInfo;
  return (
    <ItemInfoWrap webkitLineClamp={webkitLineClamp}>
      <ItemImg>
        <img src={src} alt="" />
        <div className="cover"></div>
      </ItemImg>
      <i className="vegOptions">{type}</i>
      <h3 className="title">
        <a href="">{storeName}</a>
      </h3>
      <strong className="region">{region}</strong>
      <span className="starRating">{starRating}</span>
      <p>{contents}</p>
    </ItemInfoWrap>
  );
};

export default ItemInfo;

const ItemInfoWrap = styled.div`
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
    color: #2e7d32;
  }
  .region {
    display: block;
    width: 100%;
    color: #777;
  }
  .starRating {
    width: 100%;
  }
  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${(props) => props.webkitLineClamp};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ItemImg = styled.div`
  position: relative;
  margin: 0.5rem 0;

  img {
    border-radius: 10px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }

  .cover {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #2e7d32;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover .cover {
    opacity: 0.75;
  }
`;
