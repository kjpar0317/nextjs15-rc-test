import type { NextRequest, NextResponse } from "next/server";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { getCookies } from "next-client-cookies/server";

import { appRouter } from "@/server/router";
import { createContext } from "@/server/context";

const handler = (request: NextRequest, res: NextResponse) => {
  console.log(getCookies());
  console.log(res);
  console.log(`cookie: ${request.cookies}`);
  console.log(`incoming request ${request.url}`);
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: (opts) => createContext(opts),
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });
};

export { handler as GET, handler as POST };
