import React, { useRef } from 'react';
import styled from 'styled-components';
import Stars from '../../stars/Stars';
import KaKaoMap from '../../Map/KakaoMap';
import { ViewAllWrap } from '../../carousel/VeiwAll';
import { ReactComponent as PlusSvg } from '../../../images/icons/add.svg';
import useViewMore from '../../../hooks/useViewMore';

const PostTextBox = ({ post }) => {
  console.log('postDetailBox', post);
  const {
    store: { vegType, starRating, storeName, address, contactNum, operatingHours, operatingHoursMemo, menuList },
  } = post;
  const refMoreHoursBtn = useRef(null);
  const refMoreHours = useRef(null);
  const refMoreMenuBtn = useRef(null);
  const refMoreMenu = useRef(null);
  let handleMoreBtnHover = useViewMore(refMoreHoursBtn, refMoreHours);

  const handleMoreMenuHover = () => {
    let zIndex0 = refMoreMenu.current.style.zIndex === '';
    zIndex0 ? (refMoreMenu.current.style.zIndex = '1000') : (refMoreMenu.current.style.zIndex = '');

    let rotate45 = refMoreMenuBtn.current.style.transform === 'rotate(45deg)';
    if (refMoreMenuBtn.current.style.transform === '') refMoreMenuBtn.current.style.transform = 'rotate(45deg)';
    rotate45
      ? (refMoreMenuBtn.current.style.transform = 'rotate(0deg)')
      : (refMoreMenuBtn.current.style.transform = 'rotate(45deg)');
  };

  return (
    <Wrap>
      <div className="innerWrap">
        <span className="vegType">{vegType}</span>
        <h2 className="store">{storeName}</h2>
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
        <div className="openHoursWrap" ref={refMoreHours}>
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
                <ViewMoreBtn ref={refMoreHoursBtn} onMouseOver={handleMoreBtnHover} onMouseOut={handleMoreBtnHover} />
              )}
            </ul>
          </div>
        </div>
        <div className="menu textBox" ref={refMoreMenu}>
          <strong className="infoTitle">메뉴</strong>
          <ul className="menuList infoContents">
            {menuList.map((menu) => (
              <li key={menu.menu}>
                <span className="vegType">{menu.vegtype}</span>
                <span className="name">{menu.menu}</span>
                <span>{menu.price}원</span>
              </li>
            ))}
            {menuList.length > 3 && (
              <ViewMoreBtn ref={refMoreMenuBtn} onMouseOver={handleMoreMenuHover} onMouseOut={handleMoreMenuHover} />
            )}
          </ul>
        </div>
        <div className="address textBox">
          <div>
            <strong className="infoTitle">위치</strong>
            <span className="infoContents">{address}</span>
          </div>
        </div>
      </div>
      <div className="map">
        <KaKaoMap defaultCenter={{ lat: 33.450701, lng: 126.570667 }} />
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

    .vegType {
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

    .openHoursWrap {
      z-index: 0;
      position: relative;
      background-color: ${(props) => props.theme.background[0]};
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
      top: 369px;
      min-height: 123px;
      background-color: ${(props) => props.theme.background[0]};
      transition: all 0.2s;
      .menuList {
        li {
          margin-bottom: 5px;

          .vegType {
            display: inline-block;
            width: 62px;
          }
          .name {
            display: inline-block;
            width: 275px;
            margin-left: 5px;
          }
        }
      }
    }

    .address {
      z-index: 2;
      position: absolute;
      top: 453px;
      min-height: 123px;
      background-color: ${(props) => props.theme.background[0]};
      div {
        overflow: hidden;
      }
    }

    ${ViewAllWrap} {
      display: none;
    }
  }

  .map {
    z-index: 3;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 530px;
    height: 200px;
    margin-top: 30px;
    background-color: rgba(0, 0, 0, 0.1);
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
