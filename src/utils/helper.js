// Validation
export const validate = (name, value, users) => {
  if (name === 'userName') {
    const nameRegExp = /^[가-힣]{2,20}|[a-zA-Z]{2,20}$/;
    if (value.length === 0 || value.match(nameRegExp)) {
      return true;
    }
  } else if (name === 'email') {
    const emailRegExp = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (value.length === 0 || value.match(emailRegExp)) {
      return true;
    }
  } else if (name === 'password') {
    const numbers = /[0-9]/;
    const spellings = /[a-zA-Z]/;
    if ((numbers.test(value) && spellings.test(value) && value.length >= 8) || value.length === 0) {
      return true;
    }
  } else if (name === 'passwordCheck') {
    if (users.password === value) return true;
  } else {
    return false;
  }
};
