import styled from 'styled-components';
import ItemInfo from '../ItemInfo';
import ViewAll from '../VeiwAll';

const Carousel = ({ carouselInfo }) => {
  return (
    <CarouselSection>
      <h2>근처의 비건 식당</h2>
      <ul>
        {carouselInfo.map((li) => (
          <CarouselItem>
            <ItemInfo itemInfo={li.review} width={270} height={175} webkitLineClamp={3} />
          </CarouselItem>
        ))}
      </ul>
      <ViewAll />
    </CarouselSection>
  );
};

export default Carousel;

const CarouselSection = styled.section`
  overflow: hidden;
  position: relative;

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
`;
