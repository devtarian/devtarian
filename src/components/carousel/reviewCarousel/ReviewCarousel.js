import styled from 'styled-components';
import Profile from './Profile';
import ItemInfo from '../ItemInfo';
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';
import ViewAll from '../VeiwAll';

const ReviewCarousel = ({ carouselInfo }) => {
  return (
    <Wrap>
      <h2>새로운 리뷰</h2>
      <ul>
        {carouselInfo.map((info) => (
          <CarouselItem key={info.id}>
            <Profile userInfo={info.user} />
            <ItemInfo itemInfo={info.review} width={365} height={235} webkitLineClamp={2} />
          </CarouselItem>
        ))}
      </ul>
      <CarouselBtn />
      <ViewAll />
    </Wrap>
  );
};

export default ReviewCarousel;

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
    top: 56px;
    height: 235px;
  }
`;

const CarouselItem = styled.li`
  float: left;
  width: 33.33333%;
  padding: 0 0.5rem 20px;
  margin-bottom: 40px;
`;
