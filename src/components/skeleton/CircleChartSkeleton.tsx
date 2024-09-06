import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TextAnimation from "../animation/TextAnimation";

interface CircleChartSkeletonProps {
  title?: string;
  className?: string;
}

export default function CircleChartSkeleton({
  title,
  className,
}: Readonly<CircleChartSkeletonProps>) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>
          {(title && <TextAnimation className="text-base" text={title} />) || (
            <Skeleton className="w-1/3 h-8" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn("pb-24", className)}>
        <div className="w-full items-center gap-4 h-full">
          <Skeleton className="w-full h-full rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}
