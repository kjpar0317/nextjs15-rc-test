type TData = any;

interface FilterModelItem {
  type: string;
  filterType: string;
  filter?: string | number;
  dateFrom?: string;
  dateTo?: string;
}

interface SortModelItem {
  // Column Id to apply the sort to.
  colId: string;
  // Sort direction
  sort: "asc" | "desc";
}

interface GridPageInfo {
  page: number;
  itemInPage: number;
  filters?: FilterModelItem[];
  orderBy?: SortModelItem[];
  successCallback?:
    | ((rowsThisBlock: any[], lastRow?: number | undefined) => void)
    | undefined;
}
