'use client'

import { Suspense } from 'react'
import ErrorBoundary from '@/components/Error/Boundary'
import LoadingSkeleton from '@/components/Loading/Skeleton'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/tmdb'
import MovieSection from './MovieSection'
import SectionContainer from '@/components/Containers/SectionContainer'

const MovieSections = () => {
  return (
    <SectionContainer>
      <ErrorBoundary fallback={<div>Error loading popular movies</div>}>
        <Suspense fallback={<LoadingSkeleton type="carousel" />}>
          <MovieSection title="Popular Movies" fetchFn={getPopularMovies} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Error loading top rated movies</div>}>
        <Suspense fallback={<LoadingSkeleton type="carousel" />}>
          <MovieSection title="Top Rated Movies" fetchFn={getTopRatedMovies} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Error loading upcoming movies</div>}>
        <Suspense fallback={<LoadingSkeleton type="carousel" />}>
          <MovieSection title="Upcoming Movies" fetchFn={getUpcomingMovies} />
        </Suspense>
      </ErrorBoundary>
    </SectionContainer>
  )
}

export default MovieSections
