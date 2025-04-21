import { Movie } from '../../types/movie'

export interface CarouselProps {
  items: Movie[]
  title: string
  showNavigation?: boolean
  className?: string
  onItemClick?: (movie: Movie) => void
}

export type CarouselStyleOptions = {
  itemWidth?: number
  itemGap?: number
  visibleItems?: number
}
