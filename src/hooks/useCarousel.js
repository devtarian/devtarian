import React, { useState, useRef, useEffect } from 'react';

const useCarousel = (mg) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [liClientWidth, setLiClientWidth] = useState(288);
  const liSideMargin = mg;
  const [liLength, setLiLength] = useState(10);
  const refCarouselUl = useRef();
  const refCarouselLi = useRef();

  useEffect(() => {
    setLiClientWidth(refCarouselLi.current?.clientWidth);
    setLiLength(refCarouselUl.current?.childElementCount);
  }, []);

  const onCarouselBtnClick = (newIndex, newLeftPosition) => {
    console.log(newIndex, newLeftPosition);
    setCurrentIndex(newIndex);
    setLeftPosition(newLeftPosition);
  };

  return {
    value: { currentIndex, leftPosition, liClientWidth, liSideMargin, liLength, refCarouselUl, refCarouselLi },
    onCarouselBtnClick,
  };
};

export default useCarousel;
