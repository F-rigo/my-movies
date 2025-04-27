'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.5rem;
  color: #666;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.5rem;
  color: #e14c4c;
`;
