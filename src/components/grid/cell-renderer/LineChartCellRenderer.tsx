import type { ReactElement } from "react";
import type { ICellRendererParams } from "ag-grid-community";

import { useState, useEffect } from "react";
import {
  PUBLIC_CLOUD_TYPE,
  PUBLIC_CLOUD_BLUR_COLOR,
  PUBLIC_CLOUD_COLOR,
} from "@/constant/common";
import PeityReact from "@/assets/js/peity";

export default function LineChartCellRenderer(
  props: Readonly<ICellRendererParams>
): ReactElement {
  const [color, setColor] = useState<string>();
  const [borderColor, setBorderColor] = useState<string>();
  // console.log(props);
  // console.log(props.data);

  useEffect(() => {
    if (props.data) {
      if (props.data?.type === PUBLIC_CLOUD_TYPE.KT) {
        setColor(PUBLIC_CLOUD_BLUR_COLOR.KT);
        setBorderColor(PUBLIC_CLOUD_COLOR.KT);
      } else if (props.data?.type === PUBLIC_CLOUD_TYPE.NHN) {
        setColor(PUBLIC_CLOUD_BLUR_COLOR.NHN);
        setBorderColor(PUBLIC_CLOUD_COLOR.NHN);
      } else if (props.data?.type === PUBLIC_CLOUD_TYPE.AWS) {
        setColor(PUBLIC_CLOUD_BLUR_COLOR.AWS);
        setBorderColor(PUBLIC_CLOUD_COLOR.AWS);
      } else if (props.data?.type === PUBLIC_CLOUD_TYPE.AZURE) {
        setColor(PUBLIC_CLOUD_BLUR_COLOR.AZURE);
        setBorderColor(PUBLIC_CLOUD_COLOR.AZURE);
      }
    }
  }, [props.data]);

  return (
    <>
      {props.value && (
        <div className="w-full h-full">
          <PeityReact.Line
            values={props.value}
            width={props.eGridCell.offsetWidth - 30}
            height={props.eGridCell.offsetHeight}
            fillColor={color}
            strokeColor={borderColor}
          />
        </div>
      )}
    </>
  );
}
