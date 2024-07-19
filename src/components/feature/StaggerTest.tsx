"use client";

import { motion } from "framer-motion";

import { animateVariants } from "@/constant/animate";
import RootWrapAnimation from "@/components/animation/RootWrapAnimation";

export default function StaggerTest() {
  return (
    <RootWrapAnimation>
      <motion.div variants={animateVariants.expand}>aaaaaaaaaaaaaaa</motion.div>
      <motion.div variants={animateVariants.expand}>bbbbbbbbbbbbbbb</motion.div>
      <motion.div variants={animateVariants.expand}>ccccccccccccccc</motion.div>
      <motion.div variants={animateVariants.expand}>ddddddddddddddd</motion.div>
    </RootWrapAnimation>
  );
}
