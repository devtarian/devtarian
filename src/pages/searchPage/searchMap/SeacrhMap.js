import React from 'react';
import styled from 'styled-components';
import Svg from '../../../components/common/Svg';

const SearchMap = React.forwardRef((props, ref) => {
  const handleClickMyLocation = () => {
    window.navigator.geolocation.getCurrentPosition((pos) => {
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      window.location = `/search?q=내위치&lat=${lat}&lng=${lng}`;
    });
  };

  return (
    <Wrap>
      <StyledSvg type="myLocation" color="black" p="3px" onClick={handleClickMyLocation} />
      <div id="searchMap" ref={ref} />
    </Wrap>
  );
});

export default SearchMap;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  #searchMap {
    width: 100%;
    height: 100%;
  }

  .info {
    width: 200px;
    overflow: hidden;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  .info-image {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #eeeeee;
    overflow: hidden;
    img {
      width: 99%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info-body {
    padding: 5px;
    height: 82px;
    border-bottom: 1px solid #eeeeee;
    overflow: hidden;

    .vegType {
      display: inline-block;
      width: 85px;
      height: 18px;
      line-height: 18px;
      border-radius: 4px;
      vertical-align: middle;
      text-align: center;
      font-size: 12px;
      background: ${(props) => props.theme.green[1]};
      color: ${(props) => props.theme.background[0]};
    }
    .title {
      display: inline-block;
      width: 200px;
      margin: 0px;
      margin-left: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: top;
      font-size: 16px;
    }
    .region {
      font-size: 14px;
      color: ${(props) => props.theme.color[1]};
    }
    .address {
      font-size: 12px;
    }
  }

  .info-body-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .info-footer {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 0.8rem;
  }
`;

const StyledSvg = styled(Svg)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  width: 30px;
  height: 30px;
  background: white;
`;
