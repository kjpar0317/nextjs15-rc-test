import { trpcClient } from "@/lib/trpc";

export default async function Movie() {
  const { results }: any = await trpcClient.movie.movieList.query();

  return (
    <>
      {results?.map((result: any, index: number) => (
        <div key={index}>{result.title}</div>
      ))}
    </>
  );
}
