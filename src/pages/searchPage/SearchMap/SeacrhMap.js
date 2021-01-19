import React, { useRef, useEffect } from 'react';
import Styled from 'styled-components';
import Svg from '../../../components/common/Svg';
import { useDispatch } from 'react-redux';
import searchActions from '../../../redux/actions/searchActions';

const SearchMap = () => {
  const dispatch = useDispatch();
  const mapRef = useRef();

  useEffect(() => {
    const mapElem = mapRef.current;
    if (!mapElem) return;

    dispatch(searchActions.initMap(mapElem));
  }, [dispatch]);

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
      <div id="searchMap" ref={mapRef} />
    </Wrap>
  );
};

export default SearchMap;

const Wrap = Styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    #searchMap{
        width: 100%;
        height: 100%;
    }

    .info {
      width: 220px;
      overflow: hidden;
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
      height: 72px;
      border-bottom: 1px solid #eeeeee;
      overflow: hidden;

      .vegType {
        display: inline-block;
        width: 70px;
        height: 20px;
        line-height: 20px;
        border-radius: 4px;
        vertical-align: middle;
        text-align: center;
        font-size: 12px;
        background: ${(props) => props.theme.brown[1]};
        color: ${(props) => props.theme.background[0]};
      }
      .title {
        display: inline-block;
        width: 200px;
        margin: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: top;
        color: ${(props) => props.theme.green[1]};
      }
      .title a {
        margin-left: 0.3rem;
        font-size: 16px;
        color: ${(props) => props.theme.green[1]};
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

const StyledSvg = Styled(Svg)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  width: 30px;
  height: 30px;
  background: white;
  border: 3px solid ${(props) => props.theme.green[2]};

  
`;
