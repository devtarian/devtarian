import React, { useRef, useEffect, useCallback } from 'react';
import Styled from 'styled-components';
import queryString from 'query-string';
import history from '../../../history';
import filterConfig from '../../../config/filterConfig';
import Svg from '../../../components/common/Svg';

const SearchMap = ({ data }) => {
  const query = queryString.parse(history.location.search);
  const { lat, lng } = query;
  const mapRef = useRef();

  const makeMarkers = useCallback(() => {
    // components 이벤트 등록 => https://apis.map.kakao.com/web/sample/multipleMarkerEvent/
    // overImg 처리 => https://apis.map.kakao.com/web/sample/multipleMarkerEvent2/
    const imageSrc =
      'https://user-images.githubusercontent.com/29701385/104799063-504e6200-580f-11eb-91da-171ce1e74f00.png';
    const imageSize = new window.kakao.maps.Size(38, 47);
    const markers = [];
    data.forEach((store) => {
      const imageOptions = {
        spriteOrigin: new window.kakao.maps.Point(0, filterConfig.category[store.info.category].size),
        spriteSize: new window.kakao.maps.Size(81, 257),
      };

      const { _latitude, _longitude } = store.coordinates;
      const position = new window.kakao.maps.LatLng(_latitude, _longitude);
      const image = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOptions);

      const marker = new window.kakao.maps.Marker({ position, image });
      markers.push(marker);
    });
    return markers;
  }, [data]);

  useEffect(() => {
    const mapContainer = mapRef.current;
    const center = new window.kakao.maps.LatLng(lat, lng);
    const mapOption = { center, level: 3 };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    const marker = new window.kakao.maps.Marker({ map, position: center });
    marker.setMap(map);

    const markers = makeMarkers();
    drawMap(map, markers);
  }, [lat, lng, makeMarkers]);

  const drawMap = (map, markers) => {
    markers.forEach((marker) => {
      marker.setMap(map);
    });
  };

  return (
    <Wrap>
      <StyledSvg type="myLocation" color="black" p="3px" />
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
