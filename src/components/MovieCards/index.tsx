// src/components/MovieCard/index.tsx
'use client';

import Image from 'next/image';
import * as S from './styles';

export type MovieCardProps = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average?: number;
  release_date?: string;
}

const MovieCard = ({ title, poster_path, vote_average, release_date }: MovieCardProps) => {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : '/placeholder.png'; // Create a placeholder image

  // Format release year if available
  const releaseYear = release_date ? new Date(release_date).getFullYear() : null;

  // Calculate rating color
  const getRatingColor = (rating: number | undefined) => {
    if (!rating) return '#777';
    if (rating >= 7) return '#21d07a';
    if (rating >= 5) return '#d2d531';
    return '#e14c4c';
  };

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          src={imageUrl}
          alt={`${title} poster`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />

        {vote_average && (
          <S.Rating color={getRatingColor(vote_average)}>
            {vote_average.toFixed(1)}
          </S.Rating>
        )}

        <S.Overlay>
          <S.ViewButton>View Details</S.ViewButton>
        </S.Overlay>
      </S.ImageWrapper>

      <S.Content>
        <S.Title>{title}</S.Title>
        {releaseYear && <S.Year>{releaseYear}</S.Year>}
      </S.Content>
    </S.Wrapper>
  );
};

export default MovieCard;
