// src/components/MovieCard/styles.ts
'use client';

import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

    ${Overlay} {
      opacity: 1;
    }
  }

  &:focus {
    outline: 2px solid #21d07a;
    outline-offset: 2px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%;
  overflow: hidden;
`;

export const ViewButton = styled.button`
  background: #21d07a;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #1ac06a;
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Year = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #ccc;
`;

export const Rating = styled.div<{ color: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: ${({ color }) => color};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
`;
