"use client";

import { useEffect, useState, useRef } from "react";

type SizeType = { width: number | undefined; height: number | undefined };

export default function useResize() {
  const [windowSize, setWindowSize] = useState<SizeType>({
    width: undefined,
    height: undefined,
  });
  const resizeInProgress = useRef(false);

  const handleResize = () => {
    if (resizeInProgress.current === true) {
      return;
    }
    resizeInProgress.current = true;

    throttled_updateWindowSize();
  };

  function throttled_updateWindowSize() {
    setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      resizeInProgress.current = false;
    }, 500);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
