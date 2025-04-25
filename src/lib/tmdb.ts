// src/lib/tmdb.ts
import { Movie } from '../types/movie'

const API_BASE = 'https://api.themoviedb.org/3'
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

async function fetchTMDB(endpoint: string): Promise<Movie[]> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })

  if (!res.ok) throw new Error(`TMDB API Error: ${res.status}`)
  const data = await res.json()
  return data.results
}

export async function getPopularMovies(): Promise<Movie[]> {
  return fetchTMDB('/movie/popular?language=en-US&page=1')
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  return fetchTMDB('/movie/top_rated?language=en-US&page=1')
}

export async function getUpcomingMovies(): Promise<Movie[]> {
  return fetchTMDB('/movie/upcoming?language=en-US&page=1')
}

export async function getNowPlayingMovies(): Promise<Movie[]> {
  return fetchTMDB('/movie/now_playing?language=en-US&page=1')
}
