'use client'

//create a carousel component without importing any library
import React, { useState, useRef, useEffect } from 'react';
import { CarouselProps } from './types';
import * as S from './styles';

export default function Carousel({
  items,
  title,
  showNavigation = true,
  className,
  onItemClick
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (idx: number) => {
    if (!containerRef.current) return;

    const itemWidth = containerRef.current.children[0]?.getBoundingClientRect().width || 0;
    const gap = 16; // gap between items
    const position = idx * (itemWidth + gap);

    containerRef.current.scrollTo({
      left: position,
      behavior: 'smooth'
    });
  };

  const next = () => {
    if (isMoving || !items.length) return;
    setIsMoving(true);
    const nextIndex = (index + 1) % items.length;
    setIndex(nextIndex);
    scrollToIndex(nextIndex);
    setTimeout(() => setIsMoving(false), 500);
  };

  const prev = () => {
    if (isMoving || !items.length) return;
    setIsMoving(true);
    const prevIndex = (index - 1 + items.length) % items.length;
    setIndex(prevIndex);
    scrollToIndex(prevIndex);
    setTimeout(() => setIsMoving(false), 500);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isMoving) return;

    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.children[0]?.getBoundingClientRect().width || 0;
    const gap = 16;
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));

    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScrollEnd = () => {
      setIsMoving(false);
    };

    container.addEventListener('scrollend', handleScrollEnd);
    return () => container.removeEventListener('scrollend', handleScrollEnd);
  }, []);

  return (
    <S.CarouselContainer className={className}>
      <S.Title>{title}</S.Title>
      <S.CarouselContent
        ref={containerRef}
        onScroll={handleScroll}
      >
        {items.map((item) => (
          <S.MovieCard
            key={item.id}
            onClick={() => onItemClick?.(item)}
          >
            <S.MoviePoster
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <S.MovieInfo>
              <S.MovieTitle>{item.title}</S.MovieTitle>
              <S.MovieRating>{item.vote_average.toFixed(1)}</S.MovieRating>
            </S.MovieInfo>
          </S.MovieCard>
        ))}
      </S.CarouselContent>
      {showNavigation && items.length > 0 && (
        <>
          <S.NavigationButton
            onClick={prev}
            $right={false}
            disabled={isMoving || index === 0}
          >
            &lt;
          </S.NavigationButton>
          <S.NavigationButton
            onClick={next}
            $right={true}
            disabled={isMoving || index === items.length - 1}
          >
            &gt;
          </S.NavigationButton>
        </>
      )}
    </S.CarouselContainer>
  );
}


