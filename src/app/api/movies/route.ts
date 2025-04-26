import { NextResponse } from 'next/server';

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

if (!TMDB_API_KEY) {
  console.error('TMDB_API_KEY is not defined in environment variables');
}

export async function GET(request: Request) {
  try {
    if (!TMDB_API_KEY) {
      console.error('TMDB_API_KEY is missing');
      return NextResponse.json(
        { error: 'TMDB API key is not configured' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const movieId = searchParams.get('id');

    if (!movieId) {
      return NextResponse.json(
        { error: 'Movie ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=videos`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('TMDB API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });

      return NextResponse.json(
        { error: 'Failed to fetch movie details' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching movie:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
