"use clients";

import { use } from "react";

import { getMovie } from "@/api/movie";

export default function Movie() {
  const { results } = use(getMovie());

  return (
    <>
      {results.map((result: any, index: number) => (
        <div key={index}>{result.title}</div>
      ))}
    </>
  );
}
