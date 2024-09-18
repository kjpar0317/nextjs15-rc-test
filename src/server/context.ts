import { NextApiRequest, NextApiResponse } from "next";

import { deserializeUser } from "./middleware";

export const createContext = async (res: NextApiResponse) => {
  console.log(res);
  return deserializeUser(res);
};

export type Context = Awaited<ReturnType<typeof createContext>>;
