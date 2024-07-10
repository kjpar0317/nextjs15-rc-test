"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

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
    <motion.div
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
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
                <RadioGroupItem value={elem.code} id={elem.code} />
                <Label htmlFor={elem.code}>{elem.value}</Label>
              </div>
            ))}
        </RadioGroup>
      </Suspense>
    </motion.div>
  );
}
