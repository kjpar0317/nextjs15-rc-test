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

const CACHE_GROUP_NAME = "test";

export async function setCachedData(cacheName: string, data: any) {
  if (!caches) return null;
  const cacheStorage = await caches.open(CACHE_GROUP_NAME);
  await cacheStorage.put(cacheName, new Response(JSON.stringify(data)));
}

export async function getCachedData(cacheName: string) {
  if (!caches) return null;
  const cacheStorage = await caches.open(CACHE_GROUP_NAME);
  const cachedResponse = await cacheStorage.match(cacheName);

  if (!cachedResponse?.ok) {
    return false;
  }

  return await cachedResponse.json();
}

export async function deleteCaches(cacheName: string) {
  if (!caches) return null;
  // const keys = await caches.keys();

  // for (const key of keys) {
  //   const isOurCache = key.startsWith("myapp-");
  //   if (cacheName === key || !isOurCache) {
  //     continue;
  //   }
  // }
  caches.delete(cacheName);
}
