'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.mainBg || '#0f0f0f'};
`;

export const Main = styled.main`
  padding-top: 8rem;
  padding-bottom: 2rem;
`;
