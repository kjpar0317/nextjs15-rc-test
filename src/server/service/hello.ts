import { initTRPC } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "@/server/trpc";

const t = initTRPC.create();

export const etcRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello ${input ?? "World"}!`;
  }),
  // addHello: router.mutation(async (opts) => {
  //   return opts;
  // }),
});
