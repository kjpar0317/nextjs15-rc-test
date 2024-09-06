import type { ProcedureBuilder } from "@trpc/server";

export function movieRouter(router: ProcedureBuilder<any>) {
  return {
    movieList: router.query(async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=22478a88b22311a5249584b2c23d6a3d`
      );

      return data.json();
    }),
  };
}
