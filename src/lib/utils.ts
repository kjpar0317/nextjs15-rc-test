import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fetcher(
  url: string,
  method: string = "GET",
  option: any = null
) {
  let request: RequestInit | undefined = {
    method: method,
  };

  if (option?.arg) {
    request = {
      ...request,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(option.arg),
    };
  }

  return fetch(url, request).then((r: Record<string, any>) => r.json());
}

export function currency(
  num: number | string,
  fixed: number = 2,
  lang: string = "ko"
) {
  const nnum = Number(num);

  if (nnum % 1 > 0) {
    return new Intl.NumberFormat(lang, {
      minimumFractionDigits: fixed,
    }).format(Number(num));
  }
  return new Intl.NumberFormat(lang, {
    minimumFractionDigits: 0,
  }).format(Number(num));
}
