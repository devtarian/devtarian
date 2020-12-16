import { useState } from 'react';

const useActivedBtn = () => {
  const [activedBtn, setActivedBtn] = useState('');

  const onCheckboxClick = (nextActivedBtn) => {
    setActivedBtn(nextActivedBtn);
  };

  return { activedBtn, setActivedBtn, onCheckboxClick };
};

export default useActivedBtn;
