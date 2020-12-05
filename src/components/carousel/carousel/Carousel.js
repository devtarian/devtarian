import styled from 'styled-components';
import ItemInfo from '../ItemInfo';
import CarouselBtn from '../CarouselBtn';
import ViewAll from '../VeiwAll';

const Carousel = ({ carouselInfo }) => {
  return (
    <Wrap>
      <h2>근처의 비건 식당</h2>
      <ul>
        {carouselInfo.map((li) => (
          <CarouselItem key={li.id}>
            <ItemInfo itemInfo={li.review} width={270} height={175} webkitLineClamp={3} />
          </CarouselItem>
        ))}
      </ul>
      <CarouselBtn />
      <ViewAll />
    </Wrap>
  );
};

export default Carousel;

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
`;

const CarouselItem = styled.li`
  float: left;
  width: 25%;
  padding: 0 9px 20px;
  margin-bottom: 40px;
`;
