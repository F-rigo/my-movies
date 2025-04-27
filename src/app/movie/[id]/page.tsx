import { Suspense } from 'react';
import MovieDetails from '@/components/MovieDetails';
import { ErrorScreen } from '@/components/ErrorScreen';
import * as S from './MoviePageStyles';

async function getMovieData(id: string) {
  try {  // Add this line
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const [movieResponse, videosResponse] = await Promise.all([
      fetch(new URL(`/api/movie/${id}`, baseUrl).toString()),
      fetch(new URL(`/api/movie/${id}/videos`, baseUrl).toString())
    ]);

    if (!movieResponse.ok || !videosResponse.ok) {
      throw new Error('Failed to fetch movie data');
    }

    const movieData = await movieResponse.json();
    const videosData = await videosResponse.json();

    return {
      ...movieData,
      videos: videosData
    };
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
}


export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const movie = await getMovieData(params.id);

    return (
      <S.Container>
        <Suspense fallback={<S.Loading>Loading...</S.Loading>}>
          <MovieDetails movie={movie} />
        </Suspense>
      </S.Container>
    );
  } catch {
    return (
      <ErrorScreen
        title="Error Loading Movie"
        message="We couldn't load the movie details. Please try again later."
      />
    );
  }
}
