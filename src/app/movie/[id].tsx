// pages/movie/[id].tsx
import { getMovieById } from "@/shared/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MovieDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getMovieById(id as string).then((res) => console.log(res));
  });

  return (
    <div>
      <h1>Movie Details Page</h1>
      <p>Movie ID: {id}</p>
    </div>
  );
};

export default MovieDetailsPage;
