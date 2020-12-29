import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ViewAllWrap } from '../../carousel/VeiwAll';
import { ReactComponent as PlusSvg } from '../../../images/icons/add.svg';

const PostTextBox = ({ posts }) => {
  console.log('postsDetailBox', posts);
  const {
    store: { vegType, starRating, storeName, address, contactNum, operatingHours, operatingHoursMemo, menuList },
  } = posts;
  const refViewMoreBtn = useRef(null);
  const [show, setShow] = useState(true);

  const handleShowViewMore = (e) => {
    console.log(e.currentTarget);
    setShow(!show);
  };

  return (
    <Wrap>
      <div className="innerWrap">
        <span className="vegType">{vegType}</span>
        <h2 className="store">{storeName}</h2>
        <div className="starRating textBox">
          <strong className="infoTitle">별점</strong>
          <span className="infoContents">{starRating}</span>
        </div>
        <div className="contactNum textBox">
          <strong className="infoTitle">전화번호</strong>
          <span className="infoContents">{contactNum}</span>
        </div>
        <div className="openHoursWrap">
          <div className="openHours textBox">
            <strong className="infoTitle">영업시간</strong>
            <ul className="infoContents">
              {operatingHours.map((hour) => (
                <li className="open">{hour}</li>
              ))}
              <div className="memo">
                <span>{operatingHoursMemo}</span>
              </div>
              <ViewMoreBtn ref={refViewMoreBtn} onMouseOver={handleShowViewMore} onMouseOut={handleShowViewMore} />
            </ul>
          </div>
          {show && (
            <div className="viewMore openHours textBox">
              <strong className="infoTitle">영업시간</strong>
              <ul className="infoContents">
                {operatingHours.map((hour, index) => (
                  <li key={index} className="open">
                    {hour}
                  </li>
                ))}
                <div className="memo">
                  <span>{operatingHoursMemo}</span>
                </div>
              </ul>
            </div>
          )}
        </div>
        <div className="menu textBox">
          <strong className="infoTitle">메뉴</strong>
          <ul className="menuList infoContents">
            {menuList.map((menu, index) => (
              <li key={menu.menu + index}>
                <span className="vegType">{menu.vegtype}</span>
                <span className="name">{menu.menu}</span>
                <span>{menu.price}원</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="address textBox">
          <div>
            <strong className="infoTitle">위치</strong>
            <span className="infoContents">{address}</span>
          </div>
        </div>
      </div>
      <div className="map"></div>
    </Wrap>
  );
};

export default PostTextBox;

const Wrap = styled.div`
  float: left;
  width: 600px;
  height: 700px;

  .innerWrap {
    padding: 70px 0 0 70px;
  }

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

    .menuList {
      li {
        margin-bottom: 5px;
        .vegType {
          display: inline-block;
          width: 62px;
        }
        .name {
          display: inline-block;
          width: 300px;
          margin-left: 5px;
        }
      }
    }
  }
  .openHoursWrap {
    position: relative;
    .openHours {
      height: 74px;
      overflow: hidden;
      .open {
        margin-bottom: 5px;
      }
    }
    .viewMore {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      height: 208px;
      background-color: ${(props) => props.theme.background[0]};
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

  ${ViewAllWrap} {
    display: none;
  }
`;

const ViewMoreBtn = styled(PlusSvg)`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
`;
