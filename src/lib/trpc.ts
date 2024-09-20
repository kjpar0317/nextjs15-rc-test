import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "@/server/router";

import { createTRPCClient, httpBatchLink, loggerLink } from "@trpc/client";

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: "http://localhost:3001/api/trpc",
      fetch: async (input: string, init?: any) => {
        return fetch(input, {
          ...init,
          credentials: "include",
        });
      },
      async headers() {
        if (typeof window === "undefined") {
          return {
            "x-trpc-token": await require("next/headers")
              .cookies()
              ?.get("token")?.value,
          };
        }

        return {};
      },
    } as any),
  ],
});

export type RouterOutputs = inferRouterOutputs<AppRouter>;
