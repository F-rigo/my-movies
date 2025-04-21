export interface Movie {
  id: number
  title: string
  vote_average: number
  poster_path: string | null
  backdrop_path?: string | null
  release_date?: string
  overview?: string
  genre_ids?: number[]
  original_language?: string
  popularity?: number
  vote_count?: number
  adult?: boolean
  video?: boolean
}
