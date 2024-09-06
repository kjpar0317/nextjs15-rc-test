import { use } from "react";

import { trpcClient } from "@/server/router";

export default function Movie() {
  const { results } = use(trpcClient.movieList.query());

  return (
    <>
      {results?.map((result: any, index: number) => (
        <div key={index}>{result.title}</div>
      ))}
    </>
  );
}
