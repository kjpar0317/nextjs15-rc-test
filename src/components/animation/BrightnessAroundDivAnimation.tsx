"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

interface BrightnessAroundDivAnimationProps {
  children: ReactNode;
}

export default function BrightnessAroundDivAnimation({
  children,
}: Readonly<BrightnessAroundDivAnimationProps>) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 20px rgba(0, 255, 255, 0.3)",
          "0 0 30px rgba(0, 255, 255, 0.5)",
          "0 0 40px rgba(0, 255, 255, 0.7)",
          "0 0 30px rgba(0, 255, 255, 0.5)",
          "0 0 20px rgba(0, 255, 255, 0.3)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}
