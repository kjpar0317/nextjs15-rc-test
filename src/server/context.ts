import { deserializeUser } from "./middleware";

export const createContext = async (req: Request) => {
  return deserializeUser(req);
};

export type Context = Awaited<ReturnType<typeof createContext>>;
