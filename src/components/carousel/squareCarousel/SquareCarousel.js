const SquareCarousel = () => {
  return (
    <section>
      <h2>비건 편의점</h2>
      <ul>
        {DUMMY_PROD.map((li) => (
          <li>
            <img src={li.src} alt="" />
            <div>
              <h3>{li.product}</h3>
            </div>
          </li>
        ))}
      </ul>
      <a href="더 보기"></a>
    </section>
  );
};

export default SquareCarousel;

const DUMMY_PROD = [
  {
    src: 'http://placehold.it/300x300.png?text=A',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    src: 'http://placehold.it/300x300.png?text=A',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    src: 'http://placehold.it/300x300.png?text=A',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    src: 'http://placehold.it/300x300.png?text=A',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
];
