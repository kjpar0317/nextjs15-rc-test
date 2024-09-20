import type { NextApiRequest, NextApiResponse } from "next";

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/router";
import { createContext } from "@/server/context";

const handler = (request: NextApiRequest, res: NextApiResponse) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request as any,
    router: appRouter,
    createContext: ({ req }) => createContext(req),
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
