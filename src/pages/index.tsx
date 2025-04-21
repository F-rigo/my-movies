'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../lib/tmdb';
import Carousel from "../components/Carousel/Carousel";
import { Movie } from "../types/movie";
import * as S from '../styles/pages/home';

export default function Home() {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularData, topRatedData, upcomingData] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies()
        ]);

        setPopular(popularData);
        setTopRated(topRatedData);
        setUpcoming(upcomingData);
      } catch {
        setError('Failed to fetch movies. Please try again later.');
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <S.ErrorMessage>{error}</S.ErrorMessage>;
  }

  const handleMovieClick = (movie: Movie) => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <S.HomeContainer>
      <S.Section>
        <Carousel
          title="Popular Movies"
          items={popular}
          onItemClick={handleMovieClick}
        />
      </S.Section>

      <S.Section>
        <Carousel
          title="Top Rated Movies"
          items={topRated}
          onItemClick={handleMovieClick}
        />
      </S.Section>

      <S.Section>
        <Carousel
          title="Upcoming Movies"
          items={upcoming}
          onItemClick={handleMovieClick}
        />
      </S.Section>
    </S.HomeContainer>
  );
}
