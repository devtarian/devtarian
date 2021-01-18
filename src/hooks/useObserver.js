import { useRef, useEffect, useCallback } from 'react';

const useObserver = (fetchApiData) => {
  const ref = useRef();

  const handleObserver = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        fetchApiData();
        observer.unobserve(entry.target);
      });
    },
    [fetchApiData]
  );

  useEffect(() => {
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(handleObserver, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [ref, handleObserver]);

  return ref;
};

export default useObserver;
