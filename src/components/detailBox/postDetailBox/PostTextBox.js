import React from 'react';
import styled from 'styled-components';
import { ViewAllWrap } from '../../carousel/VeiwAll';

const PostTextBox = () => {
  return (
    <Wrap>
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

  ${ViewAllWrap} {
    display: none;
  }
`;
