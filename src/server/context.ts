import { inferAsyncReturnType } from "@trpc/server";

import { deserializeUser } from "./middleware";

export const createContext = async (opts: any) => {
  return deserializeUser();
};

export type Context = inferAsyncReturnType<typeof createContext>;
