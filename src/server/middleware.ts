import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { mariadb_query } from "@/lib/db-utils";

export const deserializeUser = async () => {
  const cookieStore = cookies();
  try {
    let token;
    if (cookieStore.get("token")) {
      token = cookieStore.get("token")?.value;
    }

    const notAuthenticated = {
      user: null,
    };

    if (!token) {
      return notAuthenticated;
    }

    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret) as { sub: string };

    if (!decoded) {
      return notAuthenticated;
    }

    const user = await mariadb_query(
      `SELECT * FROM users WHERE id = ?`,
      decoded.sub
    );

    if (!user) {
      return notAuthenticated;
    }

    const { password, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
    };
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};
