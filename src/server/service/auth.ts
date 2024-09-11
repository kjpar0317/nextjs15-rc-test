import type { ProcedureBuilder } from "@trpc/server";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { setCookie, deleteCookie } from "cookies-next";

export function authRouter(router: ProcedureBuilder<any>) {
  return {
    login: router
      .input(z.object({ email: z.string(), password: z.string() }))
      .mutation(async ({ input }) => {
        // const user = await mariadb_query(
        //   `SELECT * FROM users WHERE email = ?`,
        //   input.email
        // );

        // if (!user) {
        //   throw new Error("Invalid email or password");
        // }

        // if (user.password !== input.password) {
        //   throw new Error("Invalid email or password");
        // }

        const user = {
          email: "test@test.com",
          password: "1234",
        };

        try {
          const secret = process.env.NEXTAUTH_SECRET!;
          const token = jwt.sign({ sub: user.email }, secret, {
            expiresIn: 60 * 60,
          });

          setCookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            expires: new Date(Date.now() + 60 * 60 * 1000),
            sameSite: "strict",
          });

          return {
            status: "success",
            token,
          };
        } catch (err: any) {
          throw err;
        }
      }),
    logout: router.mutation(async () => {
      deleteCookie("token");
    }),
  };
}
