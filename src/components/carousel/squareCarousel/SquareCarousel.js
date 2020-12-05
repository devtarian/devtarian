import styled from 'styled-components';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';

const SquareCarousel = () => {
  return (
    <Wrap>
      <h2>비건 편의점</h2>
      <ul>
        {DUMMY_PROD.map((li) => (
          <CarouselItem key={li.id}>
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
      <CarouselBtn />
      <ViewAll />
    </Wrap>
  );
};

export default SquareCarousel;

const Wrap = styled.section`
  position: relative;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }

  ${CarouselBtnWrap} {
    top: 0px;
    height: 301px;
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
    z-index: 100;
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

const DUMMY_PROD = [
  {
    id: 0,
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 1,
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 2,
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
  {
    id: 3,
    src: 'http://placehold.it/300x300.png?text=A',
    category: '과자',
    product: '로투스',
    ingredient: ['밀', '대두'],
    price: 3000,
  },
];
