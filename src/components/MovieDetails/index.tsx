'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { getMovieDetails, Movie } from '@/services/movies';
import * as S from './styles';

const MovieDetails = () => {
  const router = useRouter();
  const params = useParams();
  const movieId = params?.id ? Number(params.id) : null;
  const { isFavorite, toggleFavorite } = useFavorites();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId)
        .then((data) => {
          setMovie(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching movie details:', error);
          setLoading(false);
        });
    }
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.png';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : '/placeholder.png';

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
        <S.BackButton onClick={() => router.back()}>
          <ArrowLeft size={20} />
          Back
        </S.BackButton>

        <S.MainContent>
          <S.LeftColumn>
            <S.Poster>
              <Image
                src={imageUrl}
                alt={`${movie.title} poster`}
                width={350}
                height={525}
                style={{ objectFit: 'cover' }}
              />
            </S.Poster>
          </S.LeftColumn>

          <S.Details>
            <S.Title>{movie.title}</S.Title>
            <S.Year>{new Date(movie.release_date).getFullYear()}</S.Year>
            <S.Rating>
              <S.RatingValue>{movie.vote_average.toFixed(1)}</S.RatingValue>
              <S.RatingLabel>/10</S.RatingLabel>
            </S.Rating>
            <S.Synopsis>
              <S.SynopsisTitle>Synopsis</S.SynopsisTitle>
              <S.SynopsisText>{movie.overview}</S.SynopsisText>
            </S.Synopsis>
            <S.FavoriteButton
              isFavorite={isFavorite(movie.id)}
              onClick={() => toggleFavorite(movie)}
            >
              {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </S.FavoriteButton>
            {movie.videos?.results?.[0]?.key && (
              <S.Trailer>
                <S.TrailerTitle>Trailer</S.TrailerTitle>
                <S.TrailerContainer>
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                    title="Movie Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </S.TrailerContainer>
              </S.Trailer>
            )}
          </S.Details>
        </S.MainContent>
      </S.Content>
    </S.Wrapper>
  );
};

export default MovieDetails;
