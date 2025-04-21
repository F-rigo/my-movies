//create a carousel component without importing any library
import React, { useState, useRef } from 'react';
import { CarouselProps } from './types';
import * as S from './styles';

export default function Carousel({
  items,
  title,
  showNavigation = true,
  className
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (isMoving) return;
    setIsMoving(true);
    const nextIndex = (index + 1) % items.length;
    setIndex(nextIndex);
    moveToIndex(nextIndex);
  };

  const prev = () => {
    if (isMoving) return;
    setIsMoving(true);
    const prevIndex = index === 0 ? items.length - 1 : index - 1;
    setIndex(prevIndex);
    moveToIndex(prevIndex);
  };

  const moveToIndex = (newIndex: number) => {
    if (!containerRef.current) return;

    const card = containerRef.current.children[0]?.getBoundingClientRect().width || 0;
    const space = 16;
    const position = newIndex * (card + space);

    containerRef.current.scrollTo({
      left: position,
      behavior: 'smooth'
    });

    setTimeout(() => setIsMoving(false), 500);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { scrollLeft } = e.currentTarget;
    const card = containerRef.current.children[0]?.getBoundingClientRect().width || 0;
    const space = 16;
    const newIndex = Math.round(scrollLeft / (card + space));

    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  return (
    <S.CarouselContainer className={className}>
      <S.Title>{title}</S.Title>
      <S.CarouselContent
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          cursor: 'grab',
          userSelect: 'none'
        }}
        onMouseDown={() => {
          if (containerRef.current) {
            containerRef.current.style.cursor = 'grabbing';
          }
        }}
        onMouseUp={() => {
          if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
          }
        }}
      >
        {items.map((movie) => (
          <S.MovieCard key={movie.id}>
            <S.MoviePoster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <S.MovieInfo>
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <S.MovieRating>
                {movie.vote_average.toFixed(1)}
              </S.MovieRating>
            </S.MovieInfo>
          </S.MovieCard>
        ))}
      </S.CarouselContent>
      {showNavigation && (
        <>
          <S.NavigationButton
            onClick={prev}
            disabled={isMoving}
            aria-label="Previous movie"
          >
            &lt;
          </S.NavigationButton>
          <S.NavigationButton
            $right
            onClick={next}
            disabled={isMoving}
            aria-label="Next movie"
          >
            &gt;
          </S.NavigationButton>
        </>
      )}
    </S.CarouselContainer>
  );
}


