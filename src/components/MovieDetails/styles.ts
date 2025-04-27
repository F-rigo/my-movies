import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 6rem;
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
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
`;

export const Poster = styled.div`
  position: relative;
  width: 350px;
  height: 525px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;

export const Details = styled.div`
  flex: 1;
  color: #fff;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Year = styled.p`
  font-size: 1.4rem;
  color: #ccc;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const RatingValue = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: #21d07a;
`;

export const RatingLabel = styled.span`
  font-size: 1.2rem;
  color: #ccc;
`;

export const Synopsis = styled.div`
  margin-bottom: 2rem;
`;

export const SynopsisTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
`;

export const SynopsisText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #ccc;
  max-width: 600px;
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({ isFavorite }) => (!isFavorite ? '#1a7d4e' : '#ff0000')};
  color: #ffffff;
  border: none;
  width: fit-content;

  &:hover {
    background: ${({ isFavorite }) => (!isFavorite ? '#156b42' : '#b30000')};
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const BackButton = styled.button`
  margin-bottom: 2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const Trailer = styled.div`
  max-width: 600px;
`;

export const TrailerTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  margin-top: 3rem;
`;

export const TrailerContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }
`;
