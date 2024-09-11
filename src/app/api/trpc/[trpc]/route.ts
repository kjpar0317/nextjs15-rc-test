import type { NextRequest } from "next/server";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/router";
import { createContext } from "@/server/context";

const handler = (request: NextRequest) => {
  console.log(request);
  console.log(`incoming request ${request.url}`);
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: () => createContext(),
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
