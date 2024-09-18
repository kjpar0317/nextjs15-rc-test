import { router } from "./trpc";
import { authRouter } from "@/server/service/auth";
import { etcRouter } from "@/server/service/hello";
import { movieRouter } from "@/server/service/movie";

export const appRouter = router({
  auth: authRouter,
  etc: etcRouter,
  movie: movieRouter,
});

export type AppRouter = typeof appRouter;
