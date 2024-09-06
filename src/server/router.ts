import { initTRPC, TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import { Context } from "@/server/context";
import { etcRouter } from "@/server/service/hello";
import { movieRouter } from "@/server/service/movie";

export const t = initTRPC.context<Context>().create({
  // transformer: superjson,
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
  ...movieRouter(publicProcedure),
  ...etcRouter(publicProcedure),
});

export type AppRouter = typeof appRouter;

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3001/api/trpc",
    }),
  ],
});
