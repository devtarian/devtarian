import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const KakaoMap = ({ className, onChange, defaultCenter, defaultLevel = 3, eventListenerSearch }) => {
  const mapRef = useRef();
  const [state, setState] = useState({
    address: '서울 강남구 강남역',
    lat: 33.450701,
    lng: 126.570667,
    keyword: '',
    map: '',
    marker: '',
    recommends: [],
    isSearching: false,
  });
  const { lat, lng, keyword, map, marker, recommends, isSearching } = state;

  const eventSearchKeyword = useCallback(() => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setState((state) => ({
          ...state,
          recommends: data.slice(0, 4),
          lat: data[0].y,
          lng: data[0].x,
        }));
      }
    });
  }, [keyword]);

  const eventSearchCoords = useCallback(
    (map, marker, coords) => {
      const lng = coords.getLng();
      const lat = coords.getLat();

      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2Address(lng, lat, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const addr = result[0].address.address_name;
          onChange({ addr, lat, lng });
          setState((state) => ({
            ...state,
            addr,
            lat,
            lng,
            isSearching: false,
          }));
        }
      });
    },
    [onChange]
  );

  // Init KakaoMap & Add Event
  useEffect(() => {
    const latlng = new window.kakao.maps.LatLng(defaultCenter.lat, defaultCenter.lng);
    const map = new window.kakao.maps.Map(mapRef.current, { center: latlng, level: defaultLevel });
    const marker = new window.kakao.maps.Marker({ map, position: latlng });

    setState((state) => ({
      ...state,
      map,
      marker,
    }));

    if (eventListenerSearch) {
      window.kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
        eventSearchCoords(map, marker, mouseEvent.latLng);
      });
    }
  }, [defaultCenter, defaultLevel, eventSearchCoords, eventListenerSearch]);

  // Search Keyword
  useEffect(() => {
    if (!isSearching) return;
    const timeDelaySearch = setTimeout(() => {
      eventSearchKeyword();
    }, 1000);
    return () => clearTimeout(timeDelaySearch);
  }, [isSearching, eventSearchKeyword]);

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      keyword: e.target.value,
      isSearching: true,
    }));
  };

  // Change Marker position
  useEffect(() => {
    if (!map || !marker) return;
    const coords = new window.kakao.maps.LatLng(lat, lng);

    marker.setPosition(coords);
    map.setCenter(coords);
  }, [lat, lng, marker, map]);

  const handleClickRecommend = (item) => {
    const coords = new window.kakao.maps.LatLng(item.y, item.x);
    eventSearchCoords(map, marker, coords);
    map.setCenter(coords);
  };

  return (
    <Wrap className={className}>
      {eventListenerSearch && (
        <input value={keyword} onChange={handleChange} placeholder="주소를 검색하거나 지도를 클릭해주세요" />
      )}
      {state.isSearching && recommends.length > 0 && (
        <SeachCardList>
          {recommends.map((item, idx) => (
            <li key={idx} onClick={() => handleClickRecommend(item)}>
              {item.address_name}
            </li>
          ))}
        </SeachCardList>
      )}
      <div id="searchMap" ref={mapRef} />
    </Wrap>
  );
};

export default KakaoMap;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  input {
    position: absolute;
    top: 10px;
    left: 10px;
    background: white;
    width: 80%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  #searchMap {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

const SeachCardList = styled.div`
  position: absolute;
  top: 55px;
  left: 10px;
  right: 0;
  z-index: 200;
  width: 80%;
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
