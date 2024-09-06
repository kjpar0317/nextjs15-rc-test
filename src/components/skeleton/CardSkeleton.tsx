import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardSkeletonProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function CardSkeleton({
  title,
  subtitle,
  className,
}: Readonly<CardSkeletonProps>) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>
          {(title && <span>{title}</span>) || <Skeleton className="w-8" />}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Skeleton className="h-4 w-[250px]" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </CardFooter>
    </Card>
  );
}
