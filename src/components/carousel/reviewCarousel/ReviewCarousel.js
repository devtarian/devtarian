import styled from 'styled-components';
import Profile from './Profile';
import ItemInfo from '../ItemInfo';
import ViewAll from '../VeiwAll';

const ReviewCarousel = ({ carouselInfo }) => {
  return (
    <ReviewCarouselSection>
      <h2>새로운 리뷰</h2>
      <ul>
        {carouselInfo.map((info) => (
          <CarouselItem>
            <Profile userInfo={info.user} />
            <ItemInfo itemInfo={info.review} width={365} height={235} webkitLineClamp={2} />
          </CarouselItem>
        ))}
      </ul>
      <ViewAll />
    </ReviewCarouselSection>
  );
};

export default ReviewCarousel;

const ReviewCarouselSection = styled.section`
  overflow: hidden;
  position: relative;

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
`;
