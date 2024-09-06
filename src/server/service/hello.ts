import { z } from "zod";

export function etcRouter(router: any) {
  return {
    hello: router
      .input(z.string().nullish())
      .query(({ input }: { input?: string }) => {
        return `Hello ${input ?? "World"}!`;
      }),
  };
}
