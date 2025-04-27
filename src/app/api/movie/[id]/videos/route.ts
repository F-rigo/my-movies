import { NextResponse } from 'next/server';

const READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2Q3ZDVmOTRhN2QxNTMzNTEwZTg0ZTk2ZWRjNmJkNSIsIm5iZiI6MTc0MDQwNzkwMS45MTYsInN1YiI6IjY3YmM4NDVkNzQxMTUyYjA0MjBhY2ZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tAsPPsiPzWdJdkvKAAqVUJPYhTICfla5VhvM919EzBw';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      {
        headers: {
          Authorization: `Bearer ${READ_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movie videos');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch movie videos' },
      { status: 500 }
    );
  }
}
