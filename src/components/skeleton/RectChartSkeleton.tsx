import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TextAnimation from "../animation/TextAnimation";

interface RectChartSkeletonProps {
  title?: string;
  className?: string;
}

export default function RectChartSkeleton({
  title,
  className,
}: Readonly<RectChartSkeletonProps>) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>
          {(title && (
            <TextAnimation className="text-base font-bold" text={title} />
          )) || <Skeleton className="w-1/3 h-8" />}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("pb-24", className)}>
        <div className="w-full items-center gap-4 h-full">
          <Skeleton className="w-full h-full" />
        </div>
      </CardContent>
    </Card>
  );
}
