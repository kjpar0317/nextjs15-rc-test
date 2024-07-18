"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

interface RotatingAnimationProps {
  children: ReactNode;
}

export default function RotatingAnimation({
  children,
}: Readonly<RotatingAnimationProps>) {
  const size = 200;
  const duration = 4;

  const path = [
    { x: 0, y: 0 },
    { x: size, y: 0 },
    { x: size, y: size },
    { x: 0, y: size },
    { x: 0, y: 0 },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        margin: "100px auto",
        border: "2px solid black",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "red",
        }}
        animate={{
          x: path.map((p) => p.x),
          y: path.map((p) => p.y),
        }}
        transition={{
          duration: duration,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}
