import React from 'react';
import styled from 'styled-components';
import SquareCarousel, { SquareCarouselWrap, CarouselUl } from '../carousel/squareCarousel/SquareCarousel';
import { ImgCardWrap } from '../card/ImgCard';
import { ViewAllWrap } from '../carousel/VeiwAll';
import { CarouselBtnWrap } from '../carousel/CarouselBtn';
import detailImg from '../../images/pexels-vanessa-loring-5965952.jpg';
import noImg from '../../images/noImg.jpg';

const ImgBox = ({ wikiPosts }) => {
  console.log('wikiPosts', wikiPosts);
  return (
    <Wrap>
      <section className="detailImg">
        <div className="imgContainer">
          <div className="innerContainer">
            <img src={wikiPosts[0].files[0] ? URL.createObjectURL(wikiPosts[0].files[0]) : detailImg} alt="" />
          </div>
        </div>
        <SquareCarousel mg={7} />
      </section>
    </Wrap>
  );
};

export default ImgBox;

const Wrap = styled.div`
  float: left;
  width: 600px;
  height: 700px;

  .imgContainer {
    width: 100%;
    height: 539px;
    white-space: nowrap;
    text-align: center;
    background-color: ${(props) => props.theme.background[1]};
    &:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      width: 1px;
    }

    .innerContainer {
      max-width: 600px;
      max-height: 539px;
      vertical-align: middle;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }

  ${SquareCarouselWrap} {
    bottom: -13px;
    height: 135px;
    h2 {
      display: none;
    }
  }

  ${CarouselUl} {
  }

  ${ImgCardWrap} {
    width: 136px;

    img {
      width: 136px;
      height: 136px;
      border-radius: 10px;
    }
    .cover {
      width: 136px;
      height: 136px;
    }
    span,
    h3 {
      display: none;
    }
  }
  ${CarouselBtnWrap} {
    button {
      top: 17%;
    }
  }
  ${ViewAllWrap} {
    display: none;
  }
`;
