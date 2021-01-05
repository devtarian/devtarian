import React from 'react';
import styled from 'styled-components';
import Stars from '../../stars/Stars';
import KakaoMap from '../../Map/KakaoMap';
import { ViewAllWrap } from '../../carousel/VeiwAll';
import { ReactComponent as PlusSvg } from '../../../images/icons/add.svg';
import useMoreDetail from '../../../hooks/useMoreDetail';

const PostTextBox = ({ post }) => {
  console.log('postDetailBox', post);
  const {
    store: { vegType, starRating, storeName, address, contactNum, operatingHours, operatingHoursMemo, menuList },
  } = post;
  const hours = useMoreDetail();
  const menu = useMoreDetail();

  return (
    <Wrap>
      <div className="innerWrap">
        <span className="vegType hide">{vegType}</span>
        <h2 className="store hide">{storeName}</h2>
        <div className="starRating textBox">
          <strong className="infoTitle">별점</strong>
          <span className="infoContents">
            <Stars rate={starRating} starsW={100} />
          </span>
        </div>
        <div className="contactNum textBox">
          <strong className="infoTitle">전화번호</strong>
          <span className="infoContents">{contactNum}</span>
        </div>
        <div className="openHoursWrap" ref={hours.refMore}>
          <div className="openHours textBox">
            <strong className="infoTitle">영업시간</strong>
            <ul className="infoContents">
              {operatingHours.map((hour) => (
                <li key={hour} className="open">
                  {hour}
                </li>
              ))}
              <div className="memo">
                <span>{operatingHoursMemo}</span>
              </div>
              {operatingHours.length > 3 && (
                <ViewMoreBtn
                  ref={hours.refBtn}
                  onMouseOver={hours.handleMoreBtnHover}
                  onMouseOut={hours.handleMoreBtnHover}
                />
              )}
            </ul>
          </div>
        </div>
        <div className="menu textBox" ref={menu.refMore}>
          <strong className="infoTitle">메뉴</strong>
          <ul className="menuList infoContents">
            {menuList.map((menu) => (
              <li key={menu.menu}>
                <span className="vegType">{menu.vegtype}</span>
                <span className="name">{menu.menu}</span>
                <span className="price">{menu.price}원</span>
              </li>
            ))}
            {menuList.length > 3 && (
              <ViewMoreBtn
                ref={menu.refBtn}
                onMouseOver={menu.handleMoreBtnHover}
                onMouseOut={menu.handleMoreBtnHover}
              />
            )}
          </ul>
        </div>
        <div className="address textBox">
          <div>
            <strong className="infoTitle">위치</strong>
            <span className="infoContents">{address}</span>
          </div>
        </div>
        <StyledMap defaultCenter={{ lat: 33.450701, lng: 126.570667 }} />
      </div>
    </Wrap>
  );
};

export default PostTextBox;

const Wrap = styled.div`
  float: left;
  width: 600px;
  height: 700px;

  .innerWrap {
    position: relative;
    padding: 70px 0 0 70px;
    .hide {
      display: block;
    }
    .vegType {
      max-width: 80px;
      padding: 1px 4px;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.brown[1]};
      text-align: center;
      font-size: 13px;
      color: ${(props) => props.theme.brown[1]};
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
      width: 100%;
      margin-bottom: 15px;

      .infoTitle {
        float: left;
        width: 100px;
      }
      .infoContents {
        float: left;
        overflow: hidden;
      }
    }

    .openHoursWrap {
      z-index: 0;
      position: relative;
      background-color: ${(props) => props.theme.background[0]};
      border-bottom: 1px solid ${(props) => props.theme.color[2]};
      transition: all 0.2s;
      .openHours {
        overflow: hidden;
        .open {
          margin-bottom: 5px;
        }
        .memo {
          color: ${(props) => props.theme.brown[2]};
        }
      }
    }

    .menu {
      z-index: 1;
      position: absolute;
      top: 362px;
      width: calc(100% - 70px);
      min-height: 123px;
      padding: 10px 0;
      background-color: ${(props) => props.theme.background[0]};
      border-bottom: 1px solid ${(props) => props.theme.color[2]};
      transition: all 0.2s;
      .menuList {
        width: calc(100% - 100px);
        li {
          overflow: hidden;
          margin-bottom: 5px;

          .vegType {
            float: left;
            width: 62px;
          }
          .name {
            float: left;
            width: calc(100% - 167px);
            margin-left: 5px;
          }
          .price {
            float: left;
            width: 100px;
          }
        }
      }
    }

    .address {
      z-index: 2;
      position: absolute;
      top: 447px;
      min-height: 123px;
      padding-top: 10px;
      background-color: ${(props) => props.theme.background[0]};
      div {
        overflow: hidden;
      }
    }

    ${ViewAllWrap} {
      display: none;
    }
  }
  @media (max-width: 767px) {
    float: none;
    width: 100%;
    max-width: 600px;
    height: 570px;
    margin: 0 auto;
    .innerWrap {
      padding: 0;
      .textBox {
        width: 100%;
        .infoTitle,
        .infoContents {
          float: none;
          display: block;
        }

        .infoContents {
          margin-top: 0.4rem;
        }
      }
      .hide {
        display: none;
      }
      .menu {
        top: 227px;
        .menuList {
          width: 100%;
          li {
            .name {
              width: calc(100% - 152px);
            }
            .price {
              width: 85px;
            }
          }
        }
      }
      .address {
        top: 339px;
      }
    }
  }
`;

const ViewMoreBtn = styled(PlusSvg)`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.1s ease-in;
`;

const StyledMap = styled(KakaoMap)`
  z-index: 3;
  position: absolute;
  bottom: -220px;
  right: 0px;
  width: 100%;
  height: 200px;
  margin-top: 30px;
  @media (max-width: 767px) {
    bottom: -254px;
  }
`;
