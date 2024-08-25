import type { ICellRendererParams } from "ag-grid-community";
import { isEmpty } from "lodash-es";

export default function LoadingSkeletonCellRenderer(
  props: Readonly<ICellRendererParams>
) {
  return (
    <>
      {(props.data && <>{props.value}</>) || (
        <div className="w-full animate-pulse">
          <p className="h-2 w-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      )}
    </>
  );
}
