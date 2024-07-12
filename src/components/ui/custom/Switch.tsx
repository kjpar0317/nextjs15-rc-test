"use client";

import type { ReactNode } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { isString } from "lodash-es";

import Label from "@/components/ui/custom/Label";
import { Switch as OrgSwitch } from "@/components/ui/switch";

export interface SwitchProps extends SwitchPrimitives.SwitchProps {
  id: string;
  children: string | ReactNode | null;
}

export default function Switch({
  id,
  children,
  ...rest
}: Readonly<SwitchProps>) {
  return (
    <div className="flex items-center space-x-2">
      <OrgSwitch id={id} {...rest} />
      {(isString(children) && (
        <Label htmlFor={id}>{children?.toString()}</Label>
      )) ||
        children}
    </div>
  );
}
