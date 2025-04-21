// src/components/Carousel/styles.ts
'use client'

import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.grid.container};
  width: 100%;
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
  padding: 1rem 5rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
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
  width: 18rem;
  height: 32rem;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.03);
  }
`

export const MoviePoster = styled.img`
  width: 100%;
  height: 24rem;
  border-radius: ${({ theme }) => theme.border.radius};
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`

export const MovieInfo = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 8rem;
`

export const MovieTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MovieRating = styled.span`
  color: #FFD700;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: ${({ theme }) => theme.font.sizes.small};

  &::before {
    content: '★';
    color: #FFD700;
  }
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
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.9);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${({ $right }) => $right ? 'right: 1rem;' : 'left: 1rem;'}

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`
