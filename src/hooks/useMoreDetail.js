import { useRef, useState } from 'react';

const useMoreDetail = () => {
  const refBtn = useRef(null);
  const refMore = useRef(null);
  const [more, setMore] = useState(false);

  const handleMoreBtnHover = () => {
    let zIndex0 = refMore.current.style.zIndex === '';
    zIndex0 ? (refMore.current.style.zIndex = '1000') : (refMore.current.style.zIndex = '');

    let rotate45 = refBtn.current.style.transform === 'rotate(45deg)';
    if (refBtn.current.style.transform === '') refBtn.current.style.transform = 'rotate(45deg)';
    rotate45 ? (refBtn.current.style.transform = 'rotate(0deg)') : (refBtn.current.style.transform = 'rotate(45deg)');

    setMore(!more);
  };
  return { refBtn, refMore, more, handleMoreBtnHover };
};

export default useMoreDetail;
