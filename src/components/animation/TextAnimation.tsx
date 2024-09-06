"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface TextAnimationProps {
  text: string;
  init?: number;
  duration?: number;
  className?: string;
}

export default function TextAnimation({
  text,
  init = 0.5,
  duration = 0.25,
  className = "",
}: Readonly<TextAnimationProps>) {
  const splitText = text.split(" ");

  function animateTextVariants(i: number) {
    return {
      duration: duration,
      delay: i / 10 + init,
    };
  }

  return (
    <>
      {splitText.map((el, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animateTextVariants(i)}
          className={cn("", className)}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
}
