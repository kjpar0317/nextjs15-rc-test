"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  ANIMATE_VARIANTS,
  ANIMATE_COMMON_HOVER,
  ANIMATE_COMMON_TAP,
} from "@/constant/animate";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <motion.div
        layout
        variants={ANIMATE_VARIANTS.longer}
        whileHover={ANIMATE_COMMON_HOVER}
        whilleTap={ANIMATE_COMMON_TAP}
      >
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

export { Input };
