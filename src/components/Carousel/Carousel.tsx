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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    if (isScrolling) return;
    setIsScrolling(true);
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const cardWidth = carouselRef.current.children[0]?.getBoundingClientRect().width || 0;
    const gap = 16; // gap from styles
    const scrollPosition = index * (cardWidth + gap);

    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });

    setTimeout(() => setIsScrolling(false), 500);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    const { scrollLeft } = e.currentTarget;
    const cardWidth = carouselRef.current.children[0]?.getBoundingClientRect().width || 0;
    const gap = 16; // gap from styles
    const newIndex = Math.round(scrollLeft / (cardWidth + gap));

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <S.CarouselContainer className={className}>
      <S.Title>{title}</S.Title>
      <S.CarouselContent
        ref={carouselRef}
        onScroll={handleScroll}
        style={{
          cursor: 'grab',
          userSelect: 'none'
        }}
        onMouseDown={() => {
          if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grabbing';
          }
        }}
        onMouseUp={() => {
          if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grab';
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
            onClick={handlePrev}
            disabled={isScrolling}
            aria-label="Previous movie"
          >
            &lt;
          </S.NavigationButton>
          <S.NavigationButton
            $right
            onClick={handleNext}
            disabled={isScrolling}
            aria-label="Next movie"
          >
            &gt;
          </S.NavigationButton>
        </>
      )}
    </S.CarouselContainer>
  );
}


