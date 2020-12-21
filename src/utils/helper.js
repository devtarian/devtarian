export const validate = (name, value, users) => {
  switch (name) {
    case 'userName':
      const nameRegExp = /^[가-힣]{2,20}|[a-zA-Z]{2,20}$/;
      return value.length !== 0 && !value.match(nameRegExp) && '표준 한글, 영문 이름을 입력해 주세요. (2~20자)';
    case 'email':
      const emailRegExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      return value.length !== 0 && !value.match(emailRegExp) && '이메일 형식으로 입력해 주세요.';
    case 'password':
      const numbers = /[0-9]/;
      const spellings = /[a-zA-Z]/;
      return (
        value.length !== 0 &&
        (!numbers.test(value) || !spellings.test(value) || value.length < 8) &&
        '영문과 숫자를 조합해 8자리 이상 입력하세요.'
      );
    case 'passwordCheck':
      return users.password !== value && '비밀번호와 일치하지 않습니다.';
    case 'avatar':
      const extensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i;
      return value.length !== 0 && !extensions.exec(value) && '이미지 파일(.jpg .jpeg .png .gif .bmp)만 올려주세요.';
    case 'contactNumber':
      const regExp = /[0-9]/;
      // const regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
      return value.length !== 0 && !value.match(regExp) && '번호만 입력해주세요.';
    case 'price':
      const numberExp = /[0-9]/;
      return value.length !== 0 && !numberExp.test(value) && '숫자만 입력해 주세요.';
    default:
      return '';
  }
};

export const timeSelect = (startTime) => {
  const result = [];
  const startTimeidx = startTime ? startTime.split('시')[0] : 0;
  for (let i = 0; i <= 24; i++) {
    if (i >= startTimeidx) {
      result.push({ title: `${i}시 00분` });
    }
  }

  return result;
};

export const changeNumberWithComma = (num) => {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
};
