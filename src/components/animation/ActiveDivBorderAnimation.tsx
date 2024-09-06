import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { AnimateDivBorder } from "@/components/animation/MovingBorder";

interface ActiveDivBorderAnimationProps {
  borderRadius?: string;
  duration?: number;
  borderClassName?: string;
  className?: string;
  children: ReactNode;
}

export default function ActiveDivBorderAnimation({
  borderRadius = "1.75rem",
  duration = 2000,
  borderClassName,
  className,
  children,
}: Readonly<ActiveDivBorderAnimationProps>) {
  return (
    <div className={cn("", className)}>
      <div
        className="absolute inset-0"
        // style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <AnimateDivBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </AnimateDivBorder>
      </div>

      <div
        className={cn(
          "block border backdrop-blur-xl items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        // style={{
        //   borderRadius: `calc(${borderRadius} * 0.96)`,
        // }}
      >
        {children}
      </div>
    </div>
  );
}
