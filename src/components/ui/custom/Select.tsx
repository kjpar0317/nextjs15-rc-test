"use client";

import { Suspense } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OneLineSkeleton from "@/components/skeleton/OneLineSkeleton";

export interface SelectCodeProps {
  code: string;
  value: string;
}

export interface SelectProps extends SelectPrimitive.SelectProps {
  list: SelectCodeProps[];
  placeholder?: string;
  select?: string;
  className?: string;
}

export default function Label({
  list,
  placeholder,
  select,
  className,
  ...rest
}: Readonly<SelectProps>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Suspense fallback={<OneLineSkeleton />}>
        <Select {...rest}>
          <SelectTrigger className={className}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {list &&
                list.length > 0 &&
                list.map((elem: SelectCodeProps, index: number) => {
                  if (elem.code === select) {
                    return (
                      <>
                        <SelectLabel key={index}>{elem.value}</SelectLabel>
                        <SelectItem key={index} value={elem.code}>
                          {elem.value}
                        </SelectItem>
                      </>
                    );
                  }
                  return (
                    <SelectItem key={index} value={elem.code}>
                      {elem.value}
                    </SelectItem>
                  );
                })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Suspense>
    </motion.div>
  );
}
