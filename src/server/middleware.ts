import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { getCookie, hasCookie } from "cookies-next";

export const deserializeUser = async () => {
  try {
    let token;

    console.log(getCookie("token"));

    if (hasCookie("token")) {
      token = getCookie("token");
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
