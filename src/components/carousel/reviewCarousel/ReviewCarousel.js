const ReviewCarousel = () => {
  return (
    <section>
      <h2>새로운 리뷰</h2>
      <ul>
        {DUMMY_REVIEWS.map((li) => (
          <li>
            <div>
              <img src={li.user.thumbNail} alt="" />
              <strong>{li.user.name}</strong>
              <span>{li.user.timeCreated}</span>
            </div>
            <div>
              <img src={li.review.src} alt="" />
              <i>{li.review.type}</i>
              <h3>{li.review.storeName}</h3>
              <strong>{li.review.region}</strong>
              <span>{li.review.starRating}</span>
              <p>{li.review.contents}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="더 보기"></a>
    </section>
  );
};

export default ReviewCarousel;

const DUMMY_REVIEWS = [
  {
    user: {
      tumbNail: 'http://placehold.it/50x50.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/400x300.png?text=A',
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
      tumbNail: 'http://placehold.it/50x50.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/400x300.png?text=A',
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
      tumbNail: 'http://placehold.it/50x50.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/400x300.png?text=A',
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
      tumbNail: 'http://placehold.it/50x50.png?text=A',
      name: 'Harry',
      timeCreated: '10초 전',
    },
    review: {
      src: 'http://placehold.it/400x300.png?text=A',
      type: 'VG',
      storeName: '발우공양',
      region: '서울',
      starRating: '⭐⭐⭐⭐⭐',
      contents:
        'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. from the Choe Gae Sa Temple',
    },
  },
];
