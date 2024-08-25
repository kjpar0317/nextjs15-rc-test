import { TData } from "@/type/aggrid";
import { includes } from "lodash-es";
import { IoCloseOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";

export default function ButtonCellRenderer(props: Readonly<any>) {
  function handleClick(data: TData) {
    props.onClick?.(data);
  }

  return (
    <>
      <div className="w-full flex justify-center">
        {includes(props.values, "delete") && (
          <Button
            size="icon"
            className="w-7 h-7 bg-red-700 hover:bg-red-900"
            onClick={() => handleClick(props.data)}
          >
            <IoCloseOutline />
          </Button>
        )}
      </div>
    </>
  );
}
