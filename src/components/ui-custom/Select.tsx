"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { motion } from "framer-motion";

import {
  ANIMATE_VARIANTS,
  ANIMATE_COMMON_HOVER,
  ANIMATE_COMMON_TAP,
} from "@/constant/animate";
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
  loading?: boolean;
  className?: string;
}

export default function Label({
  list,
  placeholder,
  select,
  loading = false,
  className,
  ...rest
}: Readonly<SelectProps>) {
  return (
    <motion.div
      varinats={ANIMATE_VARIANTS.onExpand}
      whileHover={ANIMATE_COMMON_HOVER}
      // whileTap={ANIMATE_COMMON_TAP}
    >
      {(!loading && (
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
      )) || <OneLineSkeleton />}
    </motion.div>
  );
}
