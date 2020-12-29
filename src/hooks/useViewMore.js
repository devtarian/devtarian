const useViewMore = (refBtn, refViewMore) => {
  const handleMoreBtnHover = () => {
    let zIndex0 = refViewMore.current.style.zIndex === '';
    zIndex0 ? (refViewMore.current.style.zIndex = '1000') : (refViewMore.current.style.zIndex = '');

    let rotate45 = refBtn.current.style.transform === 'rotate(45deg)';
    if (refBtn.current.style.transform === '') refBtn.current.style.transform = 'rotate(45deg)';
    rotate45 ? (refBtn.current.style.transform = 'rotate(0deg)') : (refBtn.current.style.transform = 'rotate(45deg)');
  };
  return handleMoreBtnHover;
};

export default useViewMore;
