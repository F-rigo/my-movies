export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

export async function getPopularMovies(): Promise<Movie[]> {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  const data = await res.json();
  return data.results;
}