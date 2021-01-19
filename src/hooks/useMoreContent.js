import { useState, useEffect } from 'react';

const useMoreContents = (contents, standardLength) => {
  const [content, setContent] = useState(contents);
  const [isTextOver, setIsTextOver] = useState(false);

  useEffect(() => {
    if (contents.length < standardLength) return;

    setIsTextOver(true);
    setContent((state) => state.slice(0, standardLength - 1) + '...');
  }, [contents.length, standardLength]);

  const handleViewMoreClick = () => {
    setIsTextOver(false);
    setContent(contents);
  };

  return { content, isTextOver, handleViewMoreClick };
};

export default useMoreContents;
