"use client";

import { motion } from "framer-motion";

import { ANIMATE_VARIANTS } from "@/constant/animate";
import RootWrapAnimation from "@/components/animation/RootWrapAnimation";

export default function StaggerTest() {
  return (
    <RootWrapAnimation>
      <motion.div variants={ANIMATE_VARIANTS.expand}>
        aaaaaaaaaaaaaaa
      </motion.div>
      <motion.div variants={ANIMATE_VARIANTS.expand}>
        bbbbbbbbbbbbbbb
      </motion.div>
      <motion.div variants={ANIMATE_VARIANTS.expand}>
        ccccccccccccccc
      </motion.div>
      <motion.div variants={ANIMATE_VARIANTS.expand}>
        ddddddddddddddd
      </motion.div>
    </RootWrapAnimation>
  );
}
