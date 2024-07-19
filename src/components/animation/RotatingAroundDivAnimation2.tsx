"use client";

import type { ReactNode } from "react";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface RotatingAroundDivAnimation2Props {
  children: ReactNode;
}

export default function RotatingAroundDivAnimation2({
  children,
}: Readonly<RotatingAroundDivAnimation2Props>) {
  const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        console.log(divRef.current);
        setDimensions({
          width: divRef.current?.clientWidth,
          height: divRef.current?.clientHeight + 20,
        });
      }
    };

    // Initial dimensions update
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div ref={divRef} className="relative w-full h-full">
      width : {dimensions.width}
      <motion.div
        animate={{
          // rotate: 360,
          x: [0, dimensions.width, dimensions.width, 0, 0],
          y: [0, 0, dimensions.height, dimensions.height, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-3 h-3 bg-primary rounded-full -left-2"
      />
      <motion.div
        animate={{
          boxShadow: [
            "0 0 10px 5px rgba(0, 255, 255, 0.3) inset",
            "0 0 20px 10px rgba(0, 255, 255, 0.5) inset",
            "0 0 30px 15px rgba(0, 255, 255, 0.7) inset",
            "0 0 20px 10px rgba(0, 255, 255, 0.5) inset",
            "0 0 10px 5px rgba(0, 255, 255, 0.3) inset",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absoulte top-0 right-0 bottom-0 left-0 rounded-md h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
