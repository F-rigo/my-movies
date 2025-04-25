'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import MovieDetails from '@/components/MovieDetails';
import * as S from './styles';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

/**
 * MoviePage component displays detailed information about a specific movie
 * Fetches movie data from the TMDB API and handles loading and error states
 *
 * TODO:
 * - Add error boundary for better error handling
 * - Implement retry mechanism for failed requests
 * - Add loading skeleton for better UX
 */
export default function MoviePage() {
  const params = useParams();
  const id = params?.id as string;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (!id) {
          throw new Error('Movie ID is required');
        }

        const response = await fetch(`/api/movie/${id}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            `Failed to fetch movie: ${response.status} ${response.statusText}. ${errorData.error || ''}`
          );
        }

        const data = await response.json();

        if (!data || !data.id) {
          throw new Error('Invalid movie data received');
        }

        setMovie(data);
      } catch (err) {
        console.error('Error fetching movie:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching the movie');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>Error: {error}</S.Error>;
  if (!movie) return <S.Error>Movie not found</S.Error>;

  return (
    <S.Container>
      <MovieDetails movie={movie} />
    </S.Container>
  );
}
