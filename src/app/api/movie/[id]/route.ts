import { NextResponse } from 'next/server';

const READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2Q3ZDVmOTRhN2QxNTMzNTEwZTg0ZTk2ZWRjNmJkNSIsIm5iZiI6MTc0MDQwNzkwMS45MTYsInN1YiI6IjY3YmM4NDVkNzQxMTUyYjA0MjBhY2ZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tAsPPsiPzWdJdkvKAAqVUJPYhTICfla5VhvM919EzBw';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

/**
 * API route handler for fetching movie details from TMDB
 *
 * TODO:
 * - Add rate limiting
 * - Implement caching strategy
 * - Add request validation middleware
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: 'Movie ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('TMDB API error:', {
        status: response.status,
        statusText: response.statusText,
        errorData
      });
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      );
    }

    const data = await response.json();

    if (!data || !data.id) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in movie API route:', error);
    return NextResponse.json(
      { error: 'Service temporarily unavailable' },
      { status: 500 }
    );
  }
}
