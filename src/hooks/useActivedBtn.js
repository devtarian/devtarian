import { useState } from 'react';

const useActivedBtn = (initValue) => {
  const [activedBtn, setActivedBtn] = useState(initValue || '');

  const onCheckboxClick = (nextActivedBtn) => {
    console.log('nextActivedBtn', nextActivedBtn);
    setActivedBtn(nextActivedBtn);
  };

  return { activedBtn, setActivedBtn, onCheckboxClick };
};

export default useActivedBtn;
