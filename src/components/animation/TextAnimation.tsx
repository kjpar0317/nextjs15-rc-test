"use client";
import { motion } from "framer-motion";

export interface TextAnimationProps {
  text: string;
}

export default function TextAnimation({ text }: Readonly<TextAnimationProps>) {
  const splitText = text.split(" ");

  return (
    <>
      {splitText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10 + 0.5,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
}
