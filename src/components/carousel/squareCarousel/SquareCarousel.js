import styled from 'styled-components';

const SquareCarousel = () => {
  return (
    <SquareCarouselSection>
      <h2>비건 편의점</h2>
      <ul>
        {DUMMY_PROD.map((li) => (
          <CarouselItem>
            <img src={li.src} alt="" />
            <div className="cover">
              <div className="itemInfo">
                <span>{li.category}</span>
                <h3>{li.product}</h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </ul>
      <ViewAll>
        <a href="">
          <span>더 보기</span>
          <i>></i>
        </a>
      </ViewAll>
    </SquareCarouselSection>
  );
};

export default SquareCarousel;

const SquareCarouselSection = styled.section`
  overflow: hidden;
  position: relative;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

const CarouselItem = styled.li`
  position: relative;
  float: left;
  width: 25%;
  padding: 0 9px 20px;
  margin-bottom: 40px;

  img {
    width: 270px;
    height: 300px;
    border-radius: 10px;
  }

  .cover {
    position: absolute;
    top: 0;
    width: 270px;
    height: 300px;
    border-radius: 10px;
    background-color: #2e7d32;
    opacity: 0;
    transition: all 0.3s ease-in-out;

    .itemInfo {
      position: absolute;
      top: 40%;
      width: 100%;
      text-align: center;

      h3 {
        margin-top: 0.4rem;
        font-size: 20px;
      }
    }
  }

  &:hover .cover {
    opacity: 0.75;
  }
`;

const ViewAll = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  i {
    margin-left: 0.25rem;
  }
`;

const DUMMY_PROD = [
  {
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
];
