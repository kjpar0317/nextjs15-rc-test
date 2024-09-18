import { z } from "zod";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { router, publicProcedure } from "@/server/trpc";

export const authRouter = router({
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input }: any) => {
      console.log("login");
      const cookieStore = cookies();
      // console.log(ctx);
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

        cookieStore.set("token", token, {
          path: "/",
          maxAge: 60 * 60,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "none",
        });

        // ctx.res.setHeader(
        //   "Set-Cookie",
        //   `token=${token}; Path=/; MaxAge=60 * 60; HttpOnly; Secure; SameSite=Lax`
        // );

        return {
          status: true,
          token,
        };
      } catch (err: any) {
        throw err;
      }
    }),
  logout: publicProcedure.mutation(async ({ ctx }: any) => {
    const cookieStore = cookies();
    cookieStore.set("token", "", {
      path: "/",
      maxAge: 0,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    });
  }),
});
