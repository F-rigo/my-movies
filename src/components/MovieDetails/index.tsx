'use client';

import Image from 'next/image';
import { useState } from 'react';
import * as S from './styles';

interface MovieDetailsProps {
  movie: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
  };
}

/**
 * MovieDetails component displays detailed information about a movie
 * including poster, backdrop, title, release year, rating, and synopsis
 *
 * TODO:
 * - Implement favorite functionality with local storage
 * - Add loading state for images
 * - Add error handling for image loading
 */
const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // TODO: Implement local storage for favorites
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.png';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '/placeholder.png';

  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <S.Wrapper>
      <S.Backdrop>
        <Image
          src={backdropUrl}
          alt={`${movie.title} backdrop`}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <S.BackdropOverlay />
      </S.Backdrop>

      <S.Content>
        <S.Poster>
          <Image
            src={imageUrl}
            alt={`${movie.title} poster`}
            width={300}
            height={450}
            style={{ objectFit: 'cover' }}
          />
        </S.Poster>

        <S.Details>
          <S.Title>{movie.title}</S.Title>
          <S.Year>{releaseYear}</S.Year>

          <S.Rating>
            <S.RatingValue>{movie.vote_average.toFixed(1)}</S.RatingValue>
            <S.RatingLabel>Rating</S.RatingLabel>
          </S.Rating>

          <S.Synopsis>
            <S.SynopsisTitle>Synopsis</S.SynopsisTitle>
            <S.SynopsisText>{movie.overview}</S.SynopsisText>
          </S.Synopsis>

          <S.FavoriteButton
            onClick={handleFavoriteClick}
            isFavorite={isFavorite}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </S.FavoriteButton>
        </S.Details>
      </S.Content>
    </S.Wrapper>
  );
};

export default MovieDetails;
