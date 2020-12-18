import { useState } from 'react';
import { validate } from '../utils/helper';

const useInputs = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = () => {};

  return { inputs, setInputs, errors, setErrors, onChange, onSubmit };
};

export default useInputs;
