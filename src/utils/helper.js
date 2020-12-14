// Validation
export const validate = (name, value, users) => {
  // console.log('name : ', name, 'value : ', value, 'users : ', users);
  if (name === 'email') {
    if (value.length === 0 || value.includes('@')) {
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
