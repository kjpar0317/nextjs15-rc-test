import { Skeleton } from "@/components/ui/skeleton";

export default function OneLineSkeleton() {
  return (
    <div className="flex flex-col space-y-1.5">
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}
