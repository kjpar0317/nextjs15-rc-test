import type {
  GridReadyEvent,
  CellClickedEvent,
  ColDef,
  Context,
  GridApi,
} from "ag-grid-community";

import { useState, useEffect, useTransition } from "react";
import { AgGridReact } from "ag-grid-react";

import { cn } from "@/lib/utils";
import useResize from "@/hook/useResize";
import useCommon from "@/service/useCommon";

import LoadingSkeletonCellRenderer from "./cell-renderer/LoadingSkeletonCellRenderer";

interface AgGridClientSideProps {
  components?: Context;
  rowData?: TData[];
  rowHeight?: number;
  columnDefs: ColDef[];
  defaultColDef?: ColDef | undefined;
  suppressPaginationPanel?: boolean;
  suppressMultiSort?: boolean;
  skeleton?: boolean;
  className?: string;
  onGridReady?: (evnet: GridReadyEvent) => void;
  onCellClicked?: (event: CellClickedEvent) => void;
  onPageChanged?: (page: number, totPage: number) => void;
}

export default function AgGridClientSide({
  rowData,
  rowHeight = 38,
  columnDefs,
  defaultColDef,
  className,
  skeleton = false,
  onGridReady,
  onCellClicked,
}: Readonly<AgGridClientSideProps>) {
  const windowSize = useResize();
  const { isOpenSidebar } = useCommon();
  const [gridApi, setGridApi] = useState<GridApi>();
  const [, startTransition] = useTransition();

  const defColDef =
    (skeleton && {
      ...defaultColDef,
      loadingCellRenderer: LoadingSkeletonCellRenderer,
    }) ||
    defaultColDef;

  useEffect(() => {
    return () => gridApi?.destroy();
  }, []);

  useEffect(() => {
    if (gridApi) {
      startTransition(() => {
        gridApi.refreshCells({ force: true });
        gridApi.sizeColumnsToFit();
      });
    }
  }, [windowSize.width, isOpenSidebar]);

  function handleGridReady(event: GridReadyEvent) {
    setGridApi(event.api);
    // setPageSizeChange(event.api);

    event.api.sizeColumnsToFit();

    onGridReady?.(event);
  }
  function handleGridClick(event: CellClickedEvent): void {
    onCellClicked?.(event);
  }

  return (
    <div
      className={cn("ag-theme-alpine w-full h-[calc(100%_-_50px)]", className)}
    >
      <AgGridReact
        rowData={rowData}
        headerHeight={rowHeight}
        rowHeight={rowHeight}
        columnDefs={columnDefs}
        defaultColDef={defColDef}
        className="w-full h-full"
        pagination
        paginationAutoPageSize
        domLayout="normal"
        onGridReady={handleGridReady}
        onCellClicked={handleGridClick}
      />
    </div>
  );
}
