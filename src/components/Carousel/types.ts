import { Movie } from '../../types/movie'

export interface CarouselProps {
  items: Movie[]
  title: string
  showNavigation?: boolean
  className?: string
}

export type CarouselStyleOptions = {
  itemWidth?: number
  itemGap?: number
  visibleItems?: number
}
