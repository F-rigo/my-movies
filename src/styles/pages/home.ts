import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
  padding-top: 6rem;
  min-height: 100vh;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.primary[500]};
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  padding: 2rem;
`
