"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  ANIMATE_VARIANTS,
  ANIMATE_COMMON_HOVER,
  ANIMATE_COMMON_TAP,
} from "@/constant/animate";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        variants={ANIMATE_VARIANTS.expand}
        whileHover={ANIMATE_COMMON_HOVER}
        // whileTap={ANIMATE_COMMON_TAP}
      >
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
