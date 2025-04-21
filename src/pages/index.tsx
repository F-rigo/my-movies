'use client'
import { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getNowPlayingMovies } from "../lib/tmdb";
import Carousel from "../components/Carousel/Carousel";
import { Movie } from "../types/movie";
import * as S from '../styles/pages/home';

export default function Home() {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const [popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies(),
          getNowPlayingMovies()
        ]);

        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);
        setNowPlaying(nowPlayingMovies);
      } catch (error) {
        console.error("Error getting movies:", error);
      }
    }
    getMovies();
  }, []);

  return (
    <S.Container>
      <Carousel
        items={popular}
        title="Popular Movies"
      />
      <Carousel
        items={topRated}
        title="Top Rated Movies"
      />
      <Carousel
        items={upcoming}
        title="Upcoming Movies"
      />
      <Carousel
        items={nowPlaying}
        title="Now Playing Movies"
      />
    </S.Container>
  );
}
