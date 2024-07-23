"use client";

import type { ReactNode } from "react";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface RotatingAroundDivAnimationProps {
  height?: string;
  children: ReactNode;
}

export default function RotatingAroundDivAnimation({
  height = "w-full",
  children,
}: Readonly<RotatingAroundDivAnimationProps>) {
  const { theme } = useTheme();
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
        "0 0 40px 20px rgba(255, 255, 255, 0.7)",
        "0 0 60px 40px rgba(255, 255, 255, 0.7)",
        "0 0 40px 20px rgba(255, 255, 255, 0.7)",
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
      {theme === "dark" && (
        <motion.div
          variants={dotVariants}
          initial="init"
          animate="animate"
          className="w-2 h-1 rounded-full bg-white blur-sm"
        >
          <motion.div
            variants={glowVariants}
            animate="animate"
            className="absoulte w-full h-full bg-primary rounded-full blur-lg"
          />
        </motion.div>
      )}
      {children}
    </div>
  );
}
