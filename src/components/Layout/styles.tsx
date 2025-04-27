'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary[900]};
  color: ${({ theme }) => theme.colors.white[100]};
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  padding-top: 8rem;
  padding-bottom: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
