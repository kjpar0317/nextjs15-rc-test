"use client";

import { motion } from "framer-motion";

export interface TextAnimationProps {
  text: string;
  duration?: number;
}

export default function TextAnimation({
  text,
  duration = 0.25,
}: Readonly<TextAnimationProps>) {
  const splitText = text.split(" ");

  function animateTextVariants(i: number) {
    return {
      duration: duration,
      delay: i / 10 + 0.5,
    };
  }

  return (
    <>
      {splitText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animateTextVariants(i)}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
}
