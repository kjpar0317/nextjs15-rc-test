import type { ProcedureBuilder } from "@trpc/server";
import { z } from "zod";

export function etcRouter(router: ProcedureBuilder<any>) {
  return {
    hello: router.input(z.string().nullish()).query(({ input }) => {
      return `Hello ${input ?? "World"}!`;
    }),
    // addHello: router.mutation(async (opts) => {
    //   return opts;
    // }),
  };
}
