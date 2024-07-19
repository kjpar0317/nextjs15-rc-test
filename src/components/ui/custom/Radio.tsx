"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import {
  ANIMATE_VARIANTS,
  ANIMATE_COMMON_HOVER,
  ANIMATE_COMMON_TAP,
} from "@/constant/animate";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Label from "@/components/ui/custom/Label";
import OneLineSkeleton from "@/components/skeleton/OneLineSkeleton";

export interface RadioCodeProps {
  code: string;
  value: string;
}

export interface RadioProps extends RadioGroupPrimitive.RadioGroupProps {
  list: RadioCodeProps[];
  select?: string;
}

export default function Radio({
  list,
  select,
  orientation,
  className,
  ...rest
}: Readonly<RadioProps>) {
  return (
    <motion.div variants={ANIMATE_VARIANTS.expand}>
      <Suspense fallback={<OneLineSkeleton />}>
        <RadioGroup
          defaultValue={select}
          className={cn(
            className,
            orientation === "horizontal" ? "grid-flow-col" : ""
          )}
          {...rest}
        >
          {list &&
            list.length > 0 &&
            list.map((elem: RadioCodeProps, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <motion.div
                  whileHover={ANIMATE_COMMON_HOVER}
                  whilleTap={ANIMATE_COMMON_TAP}
                >
                  <RadioGroupItem value={elem.code} id={elem.code} />
                </motion.div>
                <Label htmlFor={elem.code}>{elem.value}</Label>
              </div>
            ))}
        </RadioGroup>
      </Suspense>
    </motion.div>
  );
}
