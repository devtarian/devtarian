import React, { useState } from 'react';
import { validate } from '../utils/helper';

const useInput = (initInput) => {
  const [inputs, setInputs] = useState(initInput);
  const [errors, setErrors] = useState({
    userName: {
      isTrue: true,
      message: '표준 한글, 영문 이름을 입력해 주세요. (2~20자)',
    },
    email: {
      isTrue: true,
      message: '이메일 형식으로 입력해 주세요.',
    },
    password: {
      isTrue: true,
      message: '영문과 숫자를 조합해 8자리 이상 입력하세요.',
    },
    passwordCheck: {
      isTrue: true,
      message: '비밀번호와 일치하지 않습니다.',
    },
    avatar: {
      isTrue: true,
      message: '이미지 파일(.jpg .jpeg .png .gif .bmp)만 올려주세요.',
    },
  });

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
    const isTrue = validate(name, value, inputs);

    setErrors((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        isTrue,
      },
    }));

    setInputs({ ...inputs, [name]: value });
  };
  return { inputs, setInputs, errors, onImageUpload, onInputChange };
};

export default useInput;
