import { range } from "lodash-es";

import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface HorizontalCardSkeletonProps {
  title?: string;
  num?: number;
  className?: string;
}
export default function HorizontalCardSkeleton({
  title,
  num = 3,
  className,
}: Readonly<HorizontalCardSkeletonProps>) {
  return (
    <Card className={cn("w-full", className)}>
      {title && <CardHeader>{title}</CardHeader>}
      <CardContent className="h-full">
        <div className="w-full gap-4 h-full flex">
          {range(num).map((n: number, index: number) => (
            <Skeleton key={index} className="w-80 h-[calc(100%_-_70px)]" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
