import styled from 'styled-components';
import Carousel from '../carousel/carousel/Carousel';
import SquareCarousel from '../carousel/squareCarousel/SquareCarousel';
import ReviewCarousel from '../carousel/reviewCarousel/ReviewCarousel';
import Footer from '../footer/Footer';

const MainContainer = () => {
  return (
    <MainWrap>
      <Carousel />
      <Carousel />
      <SquareCarousel />
      <ReviewCarousel />
      <Footer />
    </MainWrap>
  );
};

export default MainContainer;

const MainWrap = styled.div`
  overflow: hidden;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem 0;
`;
