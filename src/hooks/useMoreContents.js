import { useState } from 'react';

const useMoreContents = () => {
  const [viewMore, setViewMore] = useState(false);

  const handleToggleBtnClick = (e) => {
    setViewMore(!viewMore);
  };
  return { viewMore, handleToggleBtnClick };
};

export default useMoreContents;
