import { useState, useEffect } from 'react';

const useShow = (e) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(() => (e.target.dataset.show === 'show' ? true : false));
  };

  useEffect(() => {
    window.addEventListener('click', handleShow, false);
    return () => {
      window.removeEventListener('click', handleShow);
    };
  }, []);
  return { show };
};

export default useShow;
