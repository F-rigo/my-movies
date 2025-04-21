'use client'
import { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies } from "../lib/tmdb";
import Carousel from "../components/Carousel/Carousel";
import { Movie } from "../types/movie";
import * as S from '../styles/pages/home';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchAllMovies() {
      try {
        const [popular, topRated, upcoming, nowPlaying] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies(),
          getNowPlayingMovies()
        ]);

        setPopularMovies(popular);
        setTopRatedMovies(topRated);
        setUpcomingMovies(upcoming);
        setNowPlayingMovies(nowPlaying);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchAllMovies();
  }, []);

  return (
    <S.Container>
      <Carousel
        items={popularMovies}
        title="Popular Movies"
      />
      <Carousel
        items={topRatedMovies}
        title="Top Rated Movies"
      />
      <Carousel
        items={upcomingMovies}
        title="Upcoming Movies"
      />
      <Carousel
        items={nowPlayingMovies}
        title="Now Playing Movies"
      />
    </S.Container>
  );
}
