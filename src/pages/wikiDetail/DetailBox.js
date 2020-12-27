import React, { useState } from 'react';
import styled from 'styled-components';
import SquareCarousel, { SquareCarouselWrap } from '../../components/carousel/squareCarousel/SquareCarousel';
import { ImgCardWrap } from '../../components/card/ImgCard';
import { ViewAllWrap } from '../../components/carousel/VeiwAll';
import { CarouselBtnWrap } from '../../components/carousel/CarouselBtn';
import detailImg from '../../images/pexels-vanessa-loring-5965952.jpg';
import { ReactComponent as EmptyHeartSvg } from '../../images/icons/heart_border-black.svg';
import { ReactComponent as FullHeartSvg } from '../../images/icons/heart-black.svg';

const DetailBox = () => {
  const [favorites, setFavorites] = useState(false);

  const handleFavoriteBtnClick = () => {
    setFavorites(!favorites);
  };

  const renderHeart = () => {
    return favorites ? <FullHeart /> : <EmptyHeart />;
  };
  return (
    <Wrap>
      <section className="detailImg">
        <div className="imgContainer">
          <img src={detailImg} alt="" />
        </div>
        <SquareCarousel mg={7} />
      </section>
      <section className="detailText">
        <div className="innerWrap">
          <h2 className="category">과자/스낵</h2>
          <h3 className="product">로투스</h3>
          <div className="ingredient textBox">
            <strong className="infoTitle">성분</strong>
            <span className="infoContents">밀, 대두</span>
          </div>
        </div>
        <button className="favorite" onClick={handleFavoriteBtnClick}>
          {renderHeart()}
        </button>
      </section>
    </Wrap>
  );
};

export default DetailBox;

const Wrap = styled.section`
  position: relative;
  &:after {
    content: '';
    display: block;
    clear: both;
  }

  .detailImg,
  .detailText {
    float: left;
    width: 600px;
    height: 700px;
  }

  .detailImg {
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
      img {
        max-width: 600px;
        max-height: 539px;
        border-radius: 10px;
        vertical-align: middle;
      }
    }
  }

  .detailText {
    .innerWrap {
      padding: 70px 0 0 70px;
    }

    .category {
      font-size: 1rem;
      color: ${(props) => props.theme.color[2]};
    }

    .product {
      margin: 0px 0px 10px;
      font-size: 60px;

      &:after {
        content: '';
        display: block;
        height: 1px;
        width: 65px;
        background: ${(props) => props.theme.gray[0]};
        margin: 20px 0;
      }
    }
    .textBox {
      overflow: hidden;
      margin-bottom: 15px;

      .infoTitle {
        float: left;
        display: block;
        width: 100px;
      }
      .infoContents {
        float: left;
        width: 430px;
        overflow: hidden;
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

const EmptyHeart = styled(EmptyHeartSvg)`
  position: absolute;
  top: 86px;
  right: 73px;
  width: 25px;
  height: 25px;
`;

const FullHeart = styled(FullHeartSvg)`
  position: absolute;
  top: 86px;
  right: 73px;
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.brown[2]};
`;
