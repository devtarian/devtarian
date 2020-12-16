export const validate = (name, value, users) => {
  switch (name) {
    case 'userName':
      const nameRegExp = /^[가-힣]{2,20}|[a-zA-Z]{2,20}$/;
      if (value.length === 0 || value.match(nameRegExp)) return true;
      break;
    case 'email':
      const emailRegExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      if (value.length === 0 || value.match(emailRegExp)) return true;
      break;
    case 'password':
      const numbers = /[0-9]/;
      const spellings = /[a-zA-Z]/;
      if ((numbers.test(value) && spellings.test(value) && value.length >= 8) || value.length === 0) return true;
      break;
    case 'passwordCheck':
      if (users.password === value) return true;
      break;
    case 'avatar':
      const extensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i;
      if (value.length === 0 || extensions.exec(value)) return true;
      break;
    default:
      return false;
  }
};
