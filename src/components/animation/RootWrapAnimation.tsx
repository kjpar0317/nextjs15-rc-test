"use client";
import type { ReactNode } from "react";

import { MotionConfig, motion, AnimatePresence } from "framer-motion";

/*
👉🏻 spring(기본값)은 현실세계의 물리법칙을 시뮬레이트함.
👉🏻 stiffness: 물리현상을 시뮬레이트함.
👉🏻 damping: 반동력, 0으로 하면 무기한으로 진동함.
👉🏻 bounce: 튐김의 수치를 정함. 기본값 0.25
👉🏻 모든 animation에는 기본적으로 spring(=Ease)이 기본적으로 적용되기 때문에 type:"tween"으로 선형적 타입으로 바꾸면 튕기는 효과가 사라짐.
*/

interface RootWrapAnimationProps {
  parallel?: boolean;
  duration?: number;
  stagger?: number;
  children: ReactNode;
}

export default function RootWrapAnimation({
  parallel = false,
  duration = 1.5,
  stagger = 0.5,
  children,
}: Readonly<RootWrapAnimationProps>) {
  const staggerAnimate = {
    animate: {
      transition: {
        type: "spring",
        duration: duration,
        bounce: 0.5,
        delayChildren: stagger, // 자식요소들에게 delay적용
        staggerChildren: stagger, // 자식요소들에게 순서대로 증감하는 delay적용
      },
    },
  };

  return (
    <MotionConfig transition={{ type: "spring" }}>
      <AnimatePresence>
        <motion.div
          variants={!parallel ? staggerAnimate : {}}
          initial="initial"
          animate="animate"
          trasition="transition"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
