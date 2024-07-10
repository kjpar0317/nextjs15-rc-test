"use client";

import type { ReactNode } from "react";

import { Suspense } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { Label as OrgLabel } from "@/components/ui/label";
import TextAnimation from "@/components/animation/TextAnimation";

export interface LabelProps extends LabelPrimitive.LabelProps {
  children?: string;
}

export default function Label({
  children = "",
  ...rest
}: Readonly<LabelProps>) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <OrgLabel {...rest}>
        {children && <TextAnimation text={children} />}
      </OrgLabel>
    </Suspense>
  );
}
