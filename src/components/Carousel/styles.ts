// src/components/Carousel/styles.ts
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.white[100]};
`

export const Content = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  /* Para Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none;
`

export const List = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};
  width: fit-content;
`

export const CarouselContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.grid.container};
  width: 100%;
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
  position: relative;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const MovieCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    padding: 4px;
    background-color: ${({ theme }) => theme.colors.primary[900]};
  }
`

export const MoviePoster = styled.img`
  width: 100%;
  height: 27rem;
  border-radius: ${({ theme }) => theme.border.radius};
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`

export const MovieInfo = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
`

export const MovieTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white[100]};
  margin: 0;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.font.bold};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`

export const MovieRating = styled.span`
  color: #FFD700;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;

  &::before {
    content: '★';
    color: #FFD700;
  }
`

export const NavigationButton = styled.button<{ $right?: boolean }>`
  position: absolute;
  top: calc(50% - 3rem);
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.secondary[500]};
  border: none;
  color: white;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: ${({ theme }) => theme.layers.menu};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.3s;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.colors.secondary[800]};
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
