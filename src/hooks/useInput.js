import { useState } from 'react';
import { validate } from '../utils/helper';

const useInput = (initInput) => {
  const [inputs, setInputs] = useState(initInput);
  const [errors, setErrors] = useState({});

  const onImageUpload = (e) => {
    let file = e.target.files[0];
    let fileURLs = URL.createObjectURL(file);

    if (!file.type.includes('image')) {
      e.preventDefault();
      alert(errors.avatar.message);
    } else {
      setInputs({ ...inputs, avatar: file, avatarURL: fileURLs });
    }
  };

  const onInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const error = validate(name, value, inputs);

    setErrors({
      ...errors,
      [name]: error,
    });

    setInputs({ ...inputs, [name]: value });
  };

  const requiredValidate = (requiredList) => {
    let isValid = true;
    let requiredErrors = {};

    requiredList.forEach((name) => {
      if (!inputs[name]?.length || errors[name]) {
        isValid = false;
      }
      requiredErrors[name] = !inputs[name]?.length ? '필수값 입니다.' : '';
    });

    if (!isValid) {
      return setErrors((state) => ({ ...state, ...requiredErrors }));
    }

    return isValid;
  };

  return { inputs, setInputs, errors, setErrors, onImageUpload, onInputChange, requiredValidate };
};

export default useInput;
