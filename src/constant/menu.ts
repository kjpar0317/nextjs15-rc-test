import { IoQrCode, IoCalculator } from "react-icons/io5";
import { TbReceiptDollar } from "react-icons/tb";

import kt from "@/assets/images/logo/kt-ci.png";
import nhn from "@/assets/images/logo/nhn.png";
import aws from "@/assets/images/logo/aws.png";
import azure from "@/assets/images/logo/azure.png";

export const MENU_ITEMS = [
  { title: "대시보드", Icon: IoQrCode, href: "/dashboard" },
  { title: "자원별 빌링", Icon: IoCalculator, href: "/form" },
  {
    title: "청구 관리",
    Icon: TbReceiptDollar,
    href: "/about",
  },
];

export const CLOUD_MENU_ITEMS = [
  {
    title: "KT",
    Icon: kt,
    href: "/dashboard",
    children: [
      {
        title: "",
        Icon: IoQrCode,
        href: "/dashboard",
      },
    ],
  },
  {
    title: "NHN",
    Icon: nhn,
    href: "/dashboard",
    children: [
      {
        title: "",
        Icon: IoQrCode,
        href: "/dashboard",
      },
    ],
  },
  {
    title: "AWS",
    Icon: aws,
    href: "/dashboard",
    children: [
      {
        title: "",
        Icon: IoQrCode,
        href: "/dashboard",
      },
    ],
  },
  {
    title: "AZURE",
    Icon: azure,
    href: "/dashboard",
    children: [
      {
        title: "",
        Icon: IoQrCode,
        href: "/dashboard",
      },
    ],
  },
];
