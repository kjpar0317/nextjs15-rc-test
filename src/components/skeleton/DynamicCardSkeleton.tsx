"use client";

import { range } from "lodash-es";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface DynamicCardSkeletonProps {
  len: number;
  className?: string;
}

export default function DynamicCardSkeleton({
  len,
  className,
}: Readonly<DynamicCardSkeletonProps>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 w-full",
        `lg:grid-cols-${len}`,
        className
      )}
    >
      {range(len).map((num: number) => (
        <Card key={num} className="w-full h-full">
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 pt-5">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center space-x-4 w-full">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 w-full">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-2/4" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/4" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
