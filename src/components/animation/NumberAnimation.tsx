"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { round } from "lodash-es";

import { currency } from "@/lib/utils";

export interface NumberAnimationProps {
  from?: number;
  to: number;
  fixed?: number;
  duration?: number;
  isFixed?: boolean;
}

export default function NumberAnimation({
  from = 0,
  to,
  fixed = 0,
  duration = 1,
  isFixed = false,
}: Readonly<NumberAnimationProps>) {
  const nodeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        if (node) {
          if (!isFixed && to % 1 > 0) {
            node.textContent = currency(value, fixed);
          } else {
            node.textContent = currency(round(value, 0), 0);
          }
        }
      },
    });

    return () => controls.stop();
  }, [from, to, fixed]);

  return <p ref={nodeRef} />;
}
