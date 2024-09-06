import { range } from "lodash-es";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface TableBodySkeletonProps {
  row?: number;
  col?: number;
}

export default function TableBodySkeleton({
  row = 1,
  col = 1,
}: Readonly<TableBodySkeletonProps>) {
  return (
    <TableBody>
      {range(row).map((num: number) => (
        <TableRow key={num}>
          {range(col).map((num2: number) => (
            <TableCell key={`in-${num2}`}>
              <Skeleton className="w-full h-9" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
