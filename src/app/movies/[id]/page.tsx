import { ErrorScreen } from '@/components/ErrorScreen';
import MovieDetails from '@/components/MovieDetails';
import { Movie } from '@/types/movie';

async function getMovie(id: string): Promise<Movie> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies?id=${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch movie');
  }

  return res.json();
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const movie = await getMovie(params.id);
    return <MovieDetails movie={movie} />;
  } catch {
    return (
      <ErrorScreen
        title="Error Loading Movie"
        message="We couldn't load the movie details. Please try again later."
      />
    );
  }
}
