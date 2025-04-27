'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/tmdb';
import Carousel from "@/components/Carousel/Carousel";
import { Movie } from "@/types/movie";
import HomeContainer from '@/components/Containers/HomeContainer';

export default function HomePage() {
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
    return <p style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>{error}</p>;
  }

  const handleMovieClick = (movie: Movie) => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <HomeContainer>
      <Carousel
        title="Popular Movies"
        items={popular}
        onItemClick={handleMovieClick}
      />

      <Carousel
        title="Top Rated Movies"
        items={topRated}
        onItemClick={handleMovieClick}
      />

      <Carousel
        title="Upcoming Movies"
        items={upcoming}
        onItemClick={handleMovieClick}
      />
    </HomeContainer>
  );
}
