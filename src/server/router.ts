import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

export const appRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello ${input ?? "World"}!`;
  }),
});

export type AppRouter = typeof appRouter;

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3001/api/trpc",
    }),
  ],
});
