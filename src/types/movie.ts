export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
  videos?: {
    results: Array<{
      key: string
      site: string
      type: string
    }>
  }
}
