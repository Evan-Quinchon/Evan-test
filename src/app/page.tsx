"use client";

import MovieCard from "@/components/MovieCard";
import { getMovies } from "@/shared/api";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await getMovies({ sort_by: "popularity.desc", page: 1 });
      if (data && data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleClick = (id) => {
    router.push("/movies/[id]", `/movies/${id}`);
  };

  console.log(movies);

  if (!movies || !movies.length) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.carousel}>
        <h2>{`${movies.length} most popular movies`}</h2>
        <div className={styles.container}>
          {movies.map((movie) => (
            <MovieCard
              handleclick={handleClick}
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              path={movie.poster_path}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}
