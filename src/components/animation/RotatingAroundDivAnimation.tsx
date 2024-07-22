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
  const [dimensions, setDimensions] = useState({ width: -5, height: 2 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dotVariants = {
    init: {
      delay: 3,
    },
    animate: {
      x: [-5, dimensions.width - 5, dimensions.width - 5, -5, -5],
      y: [2, 2, dimensions.height - 2, dimensions.height - 2, 2],
      rotate: [
        0, 0, 0, 0, 90, 90, 90, 90, 180, 180, 180, 180, 270, 270, 270, 270, 360,
      ],
      // rotate: [0, 0, 90, 180, 270],
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
        "0 0 40px 20px hsl(var(--primary))",
        "0 0 60px 40px hsl(var(--primary))",
        "0 0 40px 20px hsl(var(--primary))",
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
