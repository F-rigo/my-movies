'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary[900]};
  color: ${({ theme }) => theme.colors.white[100]};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 8rem;
  overflow: hidden;
`;
