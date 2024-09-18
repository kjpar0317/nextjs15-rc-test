import type { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const deserializeUser = async (res: NextApiResponse) => {
  const cookieStore = cookies();
  try {
    const token = cookieStore.get("token")?.value;

    console.log(`token: ${token}`);

    const notAuthenticated = {
      user: null,
    };

    if (!token) {
      return notAuthenticated;
    }

    const secret = process.env.NEXTAUTH_SECRET!;
    const decoded = jwt.verify(token, secret) as { sub: string };

    if (!decoded) {
      return notAuthenticated;
    }

    // const user = await prisma.user.findUnique({ where: { id: decoded.sub } });
    const user = {
      email: "test@test.com",
      password: "1234",
      name: "test",
    };

    if (!user) {
      return notAuthenticated;
    }

    const { password, ...userWithoutPassword } = user;
    console.log(userWithoutPassword);
    return {
      res,
      user: userWithoutPassword,
    };
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};
