"use client";

import * as LabelPrimitive from "@radix-ui/react-label";

import { Label as OrgLabel } from "@/components/ui/label";
import TextAnimation from "@/components/animation/TextAnimation";
import OneLineSkeleton from "../skeleton/OneLineSkeleton";

export interface LabelProps extends LabelPrimitive.LabelProps {
  loading?: boolean;
  children?: string;
}

export default function Label({
  loading = false,
  children = "",
  ...rest
}: Readonly<LabelProps>) {
  return (
    <>
      {(!loading && (
        <OrgLabel {...rest}>
          {children && <TextAnimation text={children} />}
        </OrgLabel>
      )) || <OneLineSkeleton />}
    </>
  );
}
