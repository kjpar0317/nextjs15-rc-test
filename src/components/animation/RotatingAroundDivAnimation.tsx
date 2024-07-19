"use client";

import type { ReactNode } from "react";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface RotatingAroundDivAnimationProps {
  height?: string;
  children: ReactNode;
}

export default function RotatingAroundDivAnimation({
  height = "w-full",
  children,
}: Readonly<RotatingAroundDivAnimationProps>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dotVariants = {
    animate: {
      x: [0, dimensions.width, dimensions.width, 0, 0],
      y: [0, 0, dimensions.height, dimensions.height, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px 10px rgba(255, 255, 255, 0.5)",
        "0 0 40px 20px rgba(255, 255, 255, 1)",
        "0 0 20px 10px rgba(255, 255, 255, 0.5)",
      ],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setDimensions({
        width: container.clientWidth,
        height: container.clientHeight + 25,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full", height)}>
      <motion.div
        variants={dotVariants}
        initial="animate"
        animate="animate"
        className="w-2 h-2 rounded-full bg-primary blur-sm shadow-2xl"
      >
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absoulte w-full h-full bg-primary rounded-full blur-lg"
        />
      </motion.div>
      {children}
    </div>
  );
}
