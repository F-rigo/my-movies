'use client'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xxlarge};
  min-height: calc(100vh - 8rem);
  background-color: ${({ theme }) => theme.colors.primary[900]};
  color: ${({ theme }) => theme.colors.white[100]};
`

export default Container
