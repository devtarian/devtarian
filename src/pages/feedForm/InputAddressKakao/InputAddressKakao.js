import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const initialValue = {
  addr: '',
  lat: '',
  lng: '',
  search: false,
};

const InputAddressKakao = ({ value, setInputs }) => {
  const mapRef = useRef();
  const [isSearching, setIsSearching] = useState(false);
  // const [address, setAddress] = useState(initialValue);
  const [kakaoMap, setKakaoMap] = useState({ map: '', marker: '' });
  const [recommend, setRecommend] = useState([]);

  const searchKeywordEvent = useCallback(() => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(value, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setRecommend(data.slice(0, 4));

        const coords = new window.kakao.maps.LatLng(data[0].y, data[0].x);
        kakaoMap.marker.setPosition(coords);
        kakaoMap.map.setCenter(coords);
      }
    });
  }, [value, kakaoMap]);

  const searchCoordsEvent = useCallback(
    (map, marker, coords) => {
      const lng = coords.getLng();
      const lat = coords.getLat();

      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2Address(lng, lat, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          marker.setPosition(coords);
          marker.setMap(map);
          setInputs((state) => ({
            ...state,
            addr: result[0].address.address_name,
            lat,
            lng,
          }));
          setIsSearching(false);
        }
      });
    },
    [setInputs]
  );

  useEffect(() => {
    const latlng = new window.kakao.maps.LatLng(33.450701, 126.570667);
    const map = new window.kakao.maps.Map(mapRef.current, { center: latlng, level: 3 });
    const marker = new window.kakao.maps.Marker({ map, position: latlng });

    setKakaoMap({ map, marker });

    window.kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
      searchCoordsEvent(map, marker, mouseEvent.latLng);
    });
  }, [searchCoordsEvent]);

  useEffect(() => {
    if (!isSearching) return;
    const timeDelaySearch = setTimeout(() => {
      searchKeywordEvent();
    }, 1000);
    return () => clearTimeout(timeDelaySearch);
  }, [isSearching, searchKeywordEvent]);

  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      addr: e.target.value,
    }));
    setIsSearching(true);
  };

  const handleClickRecommend = (item) => {
    const coords = new window.kakao.maps.LatLng(item.y, item.x);
    searchCoordsEvent(kakaoMap.map, kakaoMap.marker, coords);
    kakaoMap.map.setCenter(coords);
  };
  return (
    <Wrap className="wrap">
      <label>위치검색</label>
      <input value={value} onChange={handleChange} placeholder="주소를 검색하세요." />
      {isSearching && recommend.length > 0 && (
        <SeachBox>
          {recommend.map((item, idx) => (
            <li key={idx} onClick={() => handleClickRecommend(item)}>
              {item.address_name}
            </li>
          ))}
        </SeachBox>
      )}
      <div id="searchMap" ref={mapRef} />
    </Wrap>
  );
};

export default InputAddressKakao;

const Wrap = styled.div`
  width: 100%;

  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
  }

  #searchMap {
    width: 100%;
    height: 300px;
    z-index: 0;
  }
`;

const SeachBox = styled.div`
  position: absolute;
  top: 82px;
  left: 0;
  right: 0;
  z-index: 200;
  padding: 17px 50px 18px 20px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray[1]};
  background-color: ${(props) => props.theme.background[0]};
  opacity: 0.85;

  li {
    display: block;
    padding: 0.2rem 0;
    &:hover {
      transition: all 0.2s ease;
      color: ${(props) => props.theme.green[1]};
      font-weight: bolder;
    }
  }
`;
