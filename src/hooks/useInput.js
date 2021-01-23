import { useState, useCallback } from 'react';
import { validate } from '../utils/helper';

const useInput = (initInput) => {
  const [inputs, setInputs] = useState(initInput);
  const [errors, setErrors] = useState({});

  const onImageUpload = useCallback((e) => {
    const files = e.target.files;
    if (files.length > 5) {
      return alert('5개 까지만 추가 가능합니다.');
    }

    let fileList = [];
    for (let i = 0; i < files.length; i++) {
      const error = validate('image', files[i].name);
      if (error) {
        return alert(error);
      }

      fileList[i] = files[i];
    }
    setErrors((errors) => ({ ...errors, files: false }));
    setInputs((state) => ({ ...state, files: fileList }));
  }, []);

  const onInputChange = useCallback(
    (e) => {
      e.target.type === 'radio' ? e.stopPropagation() : e.preventDefault();
      const { name, value } = e.target;
      const error = validate(name, value, inputs);

      setErrors((errors) => ({ ...errors, [name]: error }));
      setInputs((state) => ({ ...state, [name]: value }));
    },
    [inputs]
  );

  const requiredValidate = useCallback(
    (requiredList) => {
      const errorValues = Object.values(errors);
      const isError = (error) => !!error;
      if (errorValues.some(isError)) return;
      let isValid = true;
      let requiredErrors = {};

      requiredList.forEach((name) => {
        const hasValue = Array.isArray(inputs[name]) ? inputs[name].length : inputs[name];

        if (!hasValue || errors[name]) {
          isValid = false;
        }

        requiredErrors[name] = !hasValue ? '필수 입력값 입니다.' : '';
      });

      if (!isValid) {
        return setErrors((state) => ({ ...state, ...requiredErrors }));
      }
      return isValid;
    },
    [inputs, errors]
  );

  return { inputs, setInputs, errors, setErrors, onImageUpload, onInputChange, requiredValidate };
};

export default useInput;
