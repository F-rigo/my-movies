'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import MovieDetails from '@/components/MovieDetails';
import { ErrorScreen } from '@/components/ErrorScreen';
import * as S from './styles';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
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
  const [error, setError] = useState<{ title: string; message: string } | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (!id) {
          setError({
            title: 'Invalid Movie ID',
            message: 'The movie ID is invalid or missing.'
          });
          return;
        }

        const [movieResponse, videosResponse] = await Promise.all([
          fetch(`/api/movie/${id}`),
          fetch(`/api/movie/${id}/videos`)
        ]);

        if (!movieResponse.ok || !videosResponse.ok) {
          setError({
            title: 'Error',
            message: 'Failed to fetch movie data.'
          });
          return;
        }

        const movieData = await movieResponse.json();
        const videosData = await videosResponse.json();

        setMovie({
          ...movieData,
          videos: videosData
        });
        setLoading(false);
      } catch (err) {
        setError({
          title: 'Error',
          message: 'An unexpected error occurred.'
        });
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <ErrorScreen title={error.title} message={error.message} />;
  if (!movie) return <ErrorScreen title="Movie Not Found" message="The movie you are looking for could not be found." />;

  return (
    <S.Container>
      <MovieDetails movie={movie} />
    </S.Container>
  );
}
