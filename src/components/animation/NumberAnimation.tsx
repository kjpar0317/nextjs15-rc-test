"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export interface NumberAnimationProps {
  from?: number;
  to: number;
  fixed?: number;
}

export default function NumberAnimation({
  from = 0,
  to,
  fixed = 0,
}: Readonly<NumberAnimationProps>) {
  const nodeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(fixed);
        }
      },
    });

    return () => controls.stop();
  }, [from, to, fixed]);

  return <p ref={nodeRef} />;
}
