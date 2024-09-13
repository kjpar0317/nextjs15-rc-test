import type { ProcedureBuilder } from "@trpc/server";

import { z } from "zod";
import jwt from "jsonwebtoken";
import { getCookies } from "next-client-cookies/server";

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

        const user: Login = {
          email: "test@test.com",
          password: "1234",
        };

        try {
          const secret = process.env.NEXTAUTH_SECRET!;
          const token = jwt.sign({ sub: user.email }, secret, {
            expiresIn: 60 * 60,
          });
          // const response = NextResponse.json({
          //   status: true,
          //   token,
          // });

          getCookies().set("token", token, {
            secure: process.env.NODE_ENV === "production",
            path: "/",
            expires: 60 * 60,
          });

          return {
            status: true,
            token,
          };
        } catch (err: any) {
          throw err;
        }
      }),
    logout: router.mutation(async () => {
      getCookies().remove("token");
    }),
  };
}
