import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.grid.container};
`
