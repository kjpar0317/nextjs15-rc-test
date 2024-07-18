"use client";

import { motion } from "framer-motion";

import { animateExpandVariants } from "@/constant/child-animate";
import RootWrapAnimation from "@/components/animation/RootWrapAnimation";

export default function StaggerTest() {
  return (
    <RootWrapAnimation>
      {/* <motion.ul variants={boxVariants} initial="start" animate="end">
        <motion.li variants={circleVariants}>a</motion.li>
        <motion.li variants={circleVariants}>b</motion.li>
        <motion.li variants={circleVariants}>c</motion.li>
        <motion.li variants={circleVariants}>d</motion.li>
      </motion.ul> */}
      <motion.div variants={animateExpandVariants}>aaaaaaaaaaaaaaa</motion.div>
      <motion.div variants={animateExpandVariants}>bbbbbbbbbbbbbbb</motion.div>
      <motion.div variants={animateExpandVariants}>ccccccccccccccc</motion.div>
      <motion.div variants={animateExpandVariants}>ddddddddddddddd</motion.div>
    </RootWrapAnimation>
  );
}
