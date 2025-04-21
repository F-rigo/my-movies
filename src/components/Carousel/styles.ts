// src/components/Carousel/styles.ts
'use client'

import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.grid.container};
`

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
`

export const CarouselContent = styled.div`
  display: flex;
  gap: 1.6rem;
  overflow-x: auto;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const MovieCard = styled.div`
  flex: 0 0 18rem;
  scroll-snap-align: start;
  transition: transform 0.3s ease;
  position: relative;
  min-width: 18rem;

  &:hover {
    transform: scale(1.03);
  }
`

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  aspect-ratio: 2/3;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  border-bottom-left-radius: ${({ theme }) => theme.border.radius};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius};
`

export const MovieTitle = styled.h3`
  color: white;
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MovieRating = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

export const NavigationButton = styled.button<{ $right?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  ${({ $right }) => $right ? 'right: -2rem;' : 'left: -2rem;'}

  @media (max-width: 768px) {
    display: none;
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const PaginationDot = styled.button<{ $active?: boolean }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: none;
  background: ${({ $active, theme }) => $active ? theme.colors.primary : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`
