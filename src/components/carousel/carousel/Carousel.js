const Carousel = () => {
  return (
    <section>
      <h2>근처의 비건 식당</h2>
      <ul>
        {DUMMY_LIST.map((li) => (
          <li>
            <img src={li.src} alt="" />
            <i>{li.type}</i>
            <h3>{li.storeName}</h3>
            <strong>{li.region}</strong>
            <span>{li.starRating}</span>
            <p>{li.contents}</p>
          </li>
        ))}
      </ul>
      <a href="더 보기"></a>
    </section>
  );
};

export default Carousel;

const DUMMY_LIST = [
  {
    src: 'http://placehold.it/400x300.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
  {
    src: 'http://placehold.it/400x300.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
  {
    src: 'http://placehold.it/400x300.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
  {
    src: 'http://placehold.it/400x300.png?text=A',
    type: 'VG',
    storeName: '발우공양',

    region: '서울',
    starRating: '⭐⭐⭐⭐⭐',
    contents:
      'Buddhist temple cuisine in a clean and modern space, at 서울시종로구견지동715F. Managed by a Buddhist nun from the Choe Gae Sa Temple',
  },
];
