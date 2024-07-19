"use client";
import { motion } from "framer-motion";

import { animateTextVariants } from "@/constant/animate";
export interface TextAnimationProps {
  text: string;
}

export default function TextAnimation({ text }: Readonly<TextAnimationProps>) {
  const splitText = text.split(" ");

  return (
    <>
      {splitText.map((el, i) => (
        <motion.span variants={animateTextVariants(i)} key={i}>
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
}
