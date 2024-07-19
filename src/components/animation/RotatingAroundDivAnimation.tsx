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
  const [dimensions, setDimensions] = useState({ width: -5, height: -3 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dotVariants = {
    animate: {
      x: [-5, dimensions.width, dimensions.width, -5, -5],
      y: [-3, -3, dimensions.height, dimensions.height, -3],
      delay: 3,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 40px 20px rgba(255, 255, 255, 0.5)",
        "0 0 60px 40px rgba(255, 255, 255, 1)",
        "0 0 40px 20px rgba(255, 255, 255, 0.5)",
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
        initial="init"
        animate="animate"
        className="w-1 h-1 rounded-full bg-primary blur-sm shadow-2xl"
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
