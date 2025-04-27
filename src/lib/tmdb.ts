// src/lib/tmdb.ts
import { Movie } from '../types/movie'

const API_BASE = 'https://api.themoviedb.org/3'
const READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2Q3ZDVmOTRhN2QxNTMzNTEwZTg0ZTk2ZWRjNmJkNSIsIm5iZiI6MTc0MDQwNzkwMS45MTYsInN1YiI6IjY3YmM4NDVkNzQxMTUyYjA0MjBhY2ZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tAsPPsiPzWdJdkvKAAqVUJPYhTICfla5VhvM919EzBw'

async function fetchTMDB(endpoint: string): Promise<Movie[]> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
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
