'use client'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.large};
  height: calc(100vh - 8rem);
  position: relative;
  overflow-y: auto;
  padding: 0 6rem;
  padding-right: 6.2rem;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  /* Para Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none;
`

export default Container
