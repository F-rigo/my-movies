'use client'
import { useEffect, useState } from "react";
import { getPopularMovies, Movie } from "../lib/tmdb";
import Carousel from "@/components/Carousel/Carousel";


export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <Carousel
        items={movies.map((movie) => movie.title)}
        title="Popular Movies"
      />
    </div>
  );
}