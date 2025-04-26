import { NextResponse } from 'next/server';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
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

    if (!TMDB_API_KEY) {
      console.error('TMDB API key is missing. Current env:', {
        NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        NODE_ENV: process.env.NODE_ENV
      });
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`
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
