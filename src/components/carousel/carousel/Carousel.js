import styled from 'styled-components';

const Carousel = () => {
  return (
    <CarouselSection>
      <h2>근처의 비건 식당</h2>
      <ul>
        {DUMMY_LIST.map((li) => (
          <CarouselItem>
            <ItemImg>
              <img src={li.src} alt="" />
              <div className="cover"></div>
            </ItemImg>
            <ItemInfo>
              <i className="vegOptions">{li.type}</i>
              <h3 className="title">
                <a href="">{li.storeName}</a>
              </h3>
              <strong className="region">{li.region}</strong>
              <span className="starRating">{li.starRating}</span>
            </ItemInfo>
            <p>{li.contents}</p>
          </CarouselItem>
        ))}
      </ul>
      <a href="더 보기"></a>
    </CarouselSection>
  );
};

export default Carousel;

const CarouselSection = styled.section`
  overflow: hidden;
  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const CarouselItem = styled.li`
  float: left;
  width: 25%;
  padding: 0 9px 20px;
  margin-bottom: 40px;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ItemImg = styled.div`
  position: relative;
  margin: 0.5rem 0;

  img {
    border-radius: 10px;
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

const ItemInfo = styled.div`
  width: 270px;

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
`;

const DUMMY_LIST = [
  {
    src: 'http://placehold.it/270x175.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
  {
    src: 'http://placehold.it/270x175.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
  {
    src: 'http://placehold.it/270x175.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
  {
    src: 'http://placehold.it/270x175.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
];
