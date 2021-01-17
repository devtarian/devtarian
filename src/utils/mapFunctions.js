import { translate } from './helper';

export const makeMarkerImg = (category) => {
  const map = {
    restaurant: [0, 0],
    cafe: [47, 51],
    bakery: [95, 103],
    bar: [142, 154],
    etc: [191, 208],
  };

  const imageSrc =
    'https://user-images.githubusercontent.com/29701385/104799063-504e6200-580f-11eb-91da-171ce1e74f00.png';
  const spriteSize = new window.kakao.maps.Size(81, 257);

  const imageSizeNormal = new window.kakao.maps.Size(38, 47);
  const imageSizeOver = new window.kakao.maps.Size(45, 50);

  const spriteOriginNormal = new window.kakao.maps.Point(0, map[category][0]);
  const spriteOriginOver = new window.kakao.maps.Point(37, map[category][1]);

  const imageOptionsNormal = { spriteSize, spriteOrigin: spriteOriginNormal };
  const imageOptionsOver = { spriteSize, spriteOrigin: spriteOriginOver };

  const imageNormal = new window.kakao.maps.MarkerImage(imageSrc, imageSizeNormal, imageOptionsNormal);
  const imageOver = new window.kakao.maps.MarkerImage(imageSrc, imageSizeOver, imageOptionsOver);

  return { imageNormal, imageOver };
};

export const makeMarker = (lat, lng, image) => {
  const position = new window.kakao.maps.LatLng(lat, lng);
  return new window.kakao.maps.Marker({ position, image });
};

export const makeInfoWindow = (store) => {
  return new window.kakao.maps.InfoWindow({
    content:
      '<div class="info">' +
      '  <div class="info-image">' +
      '    <img src="' +
      store.imgUrl +
      '" alt="info_image" />' +
      '  </div>' +
      '  <div class="info-body">' +
      '    <div class="info-body-title">' +
      '      <span class="vegType">' +
      translate(store.info.vegType) +
      '</span>' +
      '      <h3 class="title">' +
      '        <a href="/">' +
      store.info.storeName +
      '</a>' +
      '      </h3>' +
      '    </div>' +
      '    <strong class="region">' +
      store.info.region +
      '</strong>' +
      '    <p class="contents">' +
      store.info.contents +
      '</p>' +
      '  </div>' +
      '  <div class="info-footer">거리: ' +
      store.distance +
      ' km</div></div>',
  });
};

export const drawMap = (map, data) => {
  data.store.forEach((store) => {
    let { marker, imageNormal, imageOver, infoWindow } = store.map;
    marker.setMap(map);
    window.kakao.maps.event.addListener(
      marker,
      'mouseover',
      () => {
        marker.setImage(imageOver);
        infoWindow.open(map, marker);
      },
      { passive: true }
    );
    window.kakao.maps.event.addListener(
      marker,
      'mouseout',
      () => {
        marker.setImage(imageNormal);
        infoWindow.close();
      },
      { passive: true }
    );
  });
};
