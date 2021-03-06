import React from 'react';
import styled from 'styled-components';
import Stars from '../../stars/Stars';
import KakaoMap from '../../map/KakaoMap';
import { ViewAllWrap } from '../../carousel/VeiwAll';
import useMoreDetail from '../../../hooks/useMoreDetail';
import { autoHypenContactNum, changeNumberWithComma, translate } from '../../../utils/helper';
import Svg from '../../common/Svg';

const StoreTextBox = ({ storeData }) => {
  const {
    coordinates: { _latitude, _longitude },
    info: {
      category,
      vegType,
      starRating,
      storeName,
      address,
      contactNum,
      operatingHours,
      operatingHoursMemo,
      menuList,
    },
  } = storeData;
  const hours = useMoreDetail();
  const menu = useMoreDetail();
  const HOURSLIST = hours.more ? operatingHours : operatingHours.slice(0, 3);
  const MENULIST = menu.more ? menuList : menuList.slice(0, 3);

  const renderOperatingHours = () => {
    return operatingHours.length === 0 ? (
      <li className="openMemo">{operatingHoursMemo}</li>
    ) : (
      <ul className="infoContents">
        {HOURSLIST.map((hour, index) => (
          <li key={index} className="open">
            {hour}
          </li>
        ))}
        {hours.more && (
          <div className="memo">
            <span>{operatingHoursMemo}</span>
          </div>
        )}
      </ul>
    );
  };

  return (
    <Wrap>
      <div className="innerWrap">
        <div className="tags">
          <span className="storeCategory hide">{translate(category)}</span>
          <span className="vegType hide">{translate(vegType)}</span>
        </div>
        <h2 className="store hide">{storeName}</h2>
        <div className="starRating textBox">
          <strong className="infoTitle">별점</strong>
          <span className="infoContents">
            <Stars rate={starRating} starsW={100} />
          </span>
        </div>
        <div className="contactNum textBox">
          <strong className="infoTitle">전화번호</strong>
          <span className="infoContents">{autoHypenContactNum(contactNum)}</span>
        </div>
        <div className="openHours textBox" ref={hours.refMore}>
          <strong className="infoTitle">영업시간</strong>
          {renderOperatingHours()}
          {operatingHours.length > 3 && (
            <ViewMoreBtn
              type="add"
              w="20px"
              h="20px"
              ref={hours.refBtn}
              onMouseOver={hours.handleMoreBtnHover}
              onMouseOut={hours.handleMoreBtnHover}
            />
          )}
        </div>
        <div className="menu textBox" ref={menu.refMore}>
          <strong className="infoTitle">메뉴</strong>
          <ul className="menuList infoContents">
            {MENULIST.map((menu, index) => (
              <li key={index}>
                <span className="vegType">{translate(menu.vegtype)}</span>
                <span className="name">{menu.menu}</span>
                <span className="price">{changeNumberWithComma(menu.price)}원</span>
              </li>
            ))}
            {menuList.length > 3 && (
              <ViewMoreBtn
                type="add"
                w="20px"
                h="20px"
                ref={menu.refBtn}
                onMouseOver={menu.handleMoreBtnHover}
                onMouseOut={menu.handleMoreBtnHover}
              />
            )}
          </ul>
        </div>
        <div className="address textBox">
          <strong className="infoTitle">위치</strong>
          <span className="infoContents">{address}</span>
          <StyledMap defaultCenter={{ lat: _latitude, lng: _longitude }} />
        </div>
      </div>
    </Wrap>
  );
};

export default StoreTextBox;

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
    .tags {
      overflow: hidden;

      .vegType {
        float: left;
        max-width: 80px;
        padding: 0px 4px;
        margin-left: 0.4rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.brown[1]};
        text-align: center;
        font-size: 13px;
        color: ${(props) => props.theme.brown[1]};
      }
      .storeCategory {
        float: left;
        max-width: 70px;
        padding: 0px 4px;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.color[1]};
        text-align: center;
        font-size: 13px;
        color: ${(props) => props.theme.color[1]};
      }
    }
    .store {
      margin: 0px 30px 10px 0;
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
    .starRating,
    .contactNum {
      overflow: hidden;
    }
    .textBox {
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
    .openHours {
      z-index: 0;
      position: relative;
      padding-bottom: 15px;
      background-color: ${(props) => props.theme.background[0]};
      overflow: hidden;
      .open {
        margin-bottom: 5px;
      }
      .memo {
        color: ${(props) => props.theme.brown[2]};
      }
      .openMemo {
        float: right;
        width: calc(100% - 125px);
        margin: 0 25px 5px 0;
        white-space: pre-wrap;
      }
    }

    .menu {
      z-index: 1;
      position: absolute;
      top: 383px;
      width: calc(100% - 70px);
      padding-bottom: 14px;
      background-color: ${(props) => props.theme.background[0]};
      .menuList {
        width: calc(100% - 100px);
        li {
          overflow: hidden;
          margin-bottom: 5px;

          .vegType {
            float: left;
            width: 68px;
            padding: 0px 4px;
            margin-top: 2px;
            border-radius: 4px;
            border: 1px solid ${(props) => props.theme.brown[1]};
            text-align: center;
            font-size: 13px;
            color: ${(props) => props.theme.brown[1]};
          }
          .name {
            float: left;
            width: calc(100% - 200px);
            margin-left: 5px;
          }
          .price {
            float: left;
            width: 100px;
            text-align: right;
          }
        }
      }
    }

    .address {
      z-index: 2;
      position: absolute;
      top: 479px;
      min-height: 123px;
      background-color: ${(props) => props.theme.background[0]};
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
        .infoContents,
        .openMemo {
          float: none;
          display: block;
          margin-top: 0.4rem;
        }
        .openMemo {
          width: 100%;
        }
      }
      .hide {
        display: none;
      }
      .menu {
        top: 251px;
        .menuList {
          width: 100%;
          li {
            .name {
              width: calc(100% - 164px);
            }
            .price {
              width: 85px;
            }
          }
        }
      }
      .address {
        top: 371px;
      }
    }
  }
`;

const ViewMoreBtn = styled(Svg)`
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
  width: 100%;
  height: 200px;
  margin-top: 30px;
`;
