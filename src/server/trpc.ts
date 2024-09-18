import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { Context } from "./context";
import { authRouter } from "@/server/service/auth";
import { etcRouter } from "@/server/service/hello";
import { movieRouter } from "@/server/service/movie";

export const t = initTRPC.context<Context>().create({
  // isServer: true,
  // OTHER SOLUTION MIGHT BE TO USE THE FOLLOWING:
  // allowOutsideOfServer: true,
  // transformer: superjson,
  // errorFormatter({ shape }) {
  //   return shape;
  // },
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Not authenticated",
    });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);
