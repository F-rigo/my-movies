import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const BackdropOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Poster = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Details = styled.div`
  flex: 1;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const Year = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const RatingValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #21d07a;
`;

export const RatingLabel = styled.span`
  font-size: 1rem;
  color: #ccc;
`;

export const Synopsis = styled.div`
  margin-bottom: 2rem;
`;

export const SynopsisTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SynopsisText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ isFavorite }) => (isFavorite ? '#e14c4c' : '#21d07a')};
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isFavorite }) => (isFavorite ? '#c43c3c' : '#1ac06a')};
  }
`;
