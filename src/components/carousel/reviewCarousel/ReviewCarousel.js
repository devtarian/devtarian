import styled from 'styled-components';

const ReviewCarousel = () => {
  return (
    <ReviewCarouselSection>
      <h2>새로운 리뷰</h2>
      <ul>
        {DUMMY_REVIEWS.map((li) => (
          <CarouselItem>
            <Profile>
              <img src={li.user.thumbNail} alt="" />
              <div className="info">
                <strong>
                  <a href="">{li.user.name}</a>
                </strong>
                <span>{li.user.timeCreated}</span>
              </div>
            </Profile>
            <ItemInfo>
              <ItemImg>
                <img src={li.review.src} alt="" />
                <div className="cover"></div>
              </ItemImg>
              <i className="vegOptions">{li.review.type}</i>
              <h3 className="title">
                <a href="">{li.review.storeName}</a>
              </h3>
              <strong className="region">{li.review.region}</strong>
              <span className="starRating">{li.review.starRating}</span>
              <p>{li.review.contents}</p>
            </ItemInfo>
          </CarouselItem>
        ))}
      </ul>
      <a href="더 보기"></a>
    </ReviewCarouselSection>
  );
};

export default ReviewCarousel;

const ReviewCarouselSection = styled.section`
  overflow: hidden;
  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const CarouselItem = styled.li`
  float: left;
  width: 33.33333%;
  padding: 0 0.5rem 20px;
  margin-bottom: 40px;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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

const Profile = styled.div`
  overflow: auto;
  margin: 0.5rem 0;
  img {
    float: left;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  .info {
    float: left;
    width: calc(100% - 48px);
    margin-top: 0.5rem;
    a {
      float: left;
      height: 100%;
      margin-top: -7px;
      padding: 7px;
      color: #2e7d32;
    }
    span {
      float: right;
      font-size: 12px;
    }
  }
`;

const DUMMY_REVIEWS = [
  {
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/365x235.png?text=A',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/365x235.png?text=A',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
  {
    user: {
      thumbNail: 'http://placehold.it/40x40.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/365x235.png?text=A',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
];
