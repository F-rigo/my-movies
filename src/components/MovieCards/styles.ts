// src/components/MovieCard/styles.ts
'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.border.radius};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);

    > div:first-child > div:last-child {
      opacity: 1;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 0;
  padding-bottom: 150%; /* Poster ratio (2:3) */
  position: relative;
  overflow: hidden;
`;

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

export const ViewButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.bold};
  padding: ${({ theme }) => theme.spacings.xxsmall} ${({ theme }) => theme.spacings.small};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacings.xsmall};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spacings.xxsmall};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Year = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Rating = styled.div<{ color: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ color }) => color};
  border: 2px solid ${({ color }) => color};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.small};
  z-index: 1;
`;
