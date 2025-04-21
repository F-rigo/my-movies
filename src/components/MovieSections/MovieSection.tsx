import { Movie } from '../../types/movie'
import MovieCarousel from '../Carousel/Carousel'

export default async function MovieSection({
  title,
  fetchFn
}: {
  title: string
  fetchFn: () => Promise<Movie[]>
}) {
  const movies = await fetchFn()
  return <MovieCarousel title={title} items={movies} />
}
