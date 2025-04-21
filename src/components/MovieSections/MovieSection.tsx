import { Movie } from '@/components/Carousel/types'
import MovieCarousel from '@/components/Carousel'

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
