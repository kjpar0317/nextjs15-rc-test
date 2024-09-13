import { initTRPC, TRPCError } from "@trpc/server";
import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import { getCookies } from "next-client-cookies/server";

import { Context } from "./context";
import { authRouter } from "./service/auth";
import { etcRouter } from "@/server/service/hello";
import { movieRouter } from "@/server/service/movie";

export const t = initTRPC.context<Context>().create({
  isServer: true,
  // OTHER SOLUTION MIGHT BE TO USE THE FOLLOWING:
  allowOutsideOfServer: true,
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource",
    });
  }
  return next();
});

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);

const router = t.router;

export const appRouter = router({
  ...authRouter(publicProcedure),
  ...movieRouter(protectedProcedure),
  ...etcRouter(publicProcedure),
});

export type AppRouter = typeof appRouter;

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: "http://localhost:3001/api/trpc",
      fetch: async (input, init?) => {
        return fetch(input, {
          ...init,
          headers: {
            ...init?.headers,
            "Set-Cookie": "sdadsadsda",
          },
          credentials: "include",
        });
      },
    }),
  ],
});
