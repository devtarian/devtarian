import React from 'react';
import styled from 'styled-components';
import SquareCarousel, {
  SquareCarouselWrap,
  CarouselUl,
} from '../../components/carousel/squareCarousel/SquareCarousel';
import { ImgCardWrap } from '../../components/card/ImgCard';
import { ViewAllWrap } from '../../components/carousel/VeiwAll';
import { CarouselBtnWrap } from '../../components/carousel/CarouselBtn';
import detailImg from '../../images/pexels-vanessa-loring-5965952.jpg';
import { ReactComponent as FavoriteSvg } from '../../images/icons/heart_border-black.svg';

const DetailBox = () => {
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
          <h2 className="store">그랑블루</h2>
          <div className="contactNum textBox">
            <strong className="infoTitle">전화번호 </strong>
            <span className="infoContents">02 - 927 - 5808</span>
          </div>
          <div className="openHours textBox">
            <strong className="infoTitle">영업시간</strong>
            <div className="infoContents">
              <span className="open">매일 09:00 ~ 21:00</span>
              <div className="dayOff">
                <span>휴무일 :</span> 공휴일
              </div>
            </div>
          </div>
          <div className="menu textBox">
            <strong className="infoTitle">메뉴</strong>
            <ul className="menuList infoContents">
              <li>
                <span className="name">어썸 버거</span>
                <span>7,000원</span>
              </li>
              <li>
                <span className="name">어썸 버거</span>
                <span>7,000원</span>
              </li>
              <li>
                <span className="name">어썸 버거</span>
                <span>7,000원</span>
              </li>
            </ul>
          </div>
          <div className="address textBox">
            <div>
              <strong className="infoTitle">위치</strong>
              <span className="infoContents">서울특별시 중구 수표동 수표로 66</span>
            </div>
          </div>
        </div>
        <div className="map"></div>
        <button className="favorite">
          <Favorite />
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

    .store {
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

      .menuList {
        li {
          margin-bottom: 5px;

          .name {
            display: inline-block;
            width: 300px;
            margin-left: 5px;
          }
        }
      }
    }

    .openHours {
      .open {
        display: inline-block;
        margin-bottom: 5px;
      }
    }

    .address {
      div {
        overflow: hidden;
      }
    }
    .map {
      width: 100%;
      height: 264px;
      margin-top: 30px;
      background-color: rgba(0, 0, 0, 0.1);
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

const Favorite = styled(FavoriteSvg)`
  position: absolute;
  top: 86px;
  right: 73px;
  width: 25px;
  height: 25px;
`;
