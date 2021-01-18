export const validate = (name, value, users) => {
  switch (name) {
    case 'username':
      const nameRegExp = /^[가-힣]{2,20}|[a-zA-Z]{2,20}$/;
      return value.length !== 0 && !value.match(nameRegExp) && '표준 한글, 영문 이름을 입력해 주세요. (2~20자)';
    case 'email':
      const emailRegExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      return value.length !== 0 && !value.match(emailRegExp) && '이메일 형식으로 입력해 주세요.';
    case 'pw':
      const numbers = /[0-9]/;
      const spellings = /[a-zA-Z]/;
      return (
        value.length !== 0 &&
        (!numbers.test(value) || !spellings.test(value) || value.length < 8) &&
        '영문과 숫자를 조합해 8자리 이상 입력하세요.'
      );
    case 'pwCheck':
      return users.pw !== value && '비밀번호와 일치하지 않습니다.';
    case 'image':
      const extensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i;
      return value.length !== 0 && !extensions.exec(value) && '이미지 파일(.jpg .jpeg .png .gif .bmp)만 올려주세요.';
    case 'contactNum':
      const regExp = /[0-9]/;
      // const regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
      return value.length !== 0 && !value.match(regExp) && '번호만 입력해주세요.';
    case 'price':
      const numberExp = /[0-9]/;
      return value.length !== 0 && !numberExp.test(value) && '숫자만 입력해 주세요.';
    case 'files':
      return value.length === 0 && '파일을 선택해주세요.';
    default:
      return false;
  }
};

export const timeSelect = (startTime) => {
  const result = [];
  const startTimeidx = startTime ? startTime.split('시')[0] : 0;
  for (let i = 0; i <= 24; i++) {
    if (i >= startTimeidx) {
      result.push(`${i}시 00분`);
    }
  }

  return result;
};

export const changeNumberWithComma = (num) => {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
};

export const extractRegion = (address) => {
  let result = '';
  try {
    result = address.split(' ')[0];
    if (result.length > 2) {
      result = result.slice(0, 2);
    }

    return result;
  } catch (e) {
    return address;
  }
};

export const timeToString = (date) => {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  const fromTime = Date.now() - new Date(date).getTime();

  if (fromTime < sec) return `방금 전`;
  if (fromTime < min) return `${Math.floor(fromTime / sec)}초 전`;
  if (fromTime < hour) return `${Math.floor(fromTime / min)}분 전`;
  if (fromTime < day) return `${Math.floor(fromTime / hour)}시간 전`;
  if (fromTime < week) return `${Math.floor(fromTime / day)}일 전`;
  if (fromTime < month) return `${Math.floor(fromTime / week)}주 전`;
  if (fromTime < year) return `${Math.floor(fromTime / month)}달 전`;
  return `${Math.floor(fromTime / year)}년 전`;
};

export const changeObjectToQuery = (object) => {
  let result = '';
  Object.keys(object).forEach((key, idx) => {
    if (idx === 0) {
      result += `?${key}=${object[key]}`;
    } else {
      result += `&${key}=${object[key]}`;
    }
  });

  return result;
};

export const translate = (key) => {
  const object = {
    all: 'All',
    restaurant: '식당',
    cafe: '카페',
    bakery: '베이커리',
    bar: 'Bar',
    etc: '기타',
    vegan: '비건',
    vegetarian: '베지테리안',
    veganOption: '비건 옵션',
    distance: '거리',
    asc: '오름차순',
    desc: '내림차순',
    processed: '가공식품',
    snack: '과자/간식',
    drink: '음료',
    createdAt: '최근등록순',
    lacto: '락토',
    ovo: '오보',
    'lacto-ovo': '락토-오보',
    pesco: '페스코',
    rated: '별점순',
  };

  if (!object[key]) return key;
  return object[key];
};
