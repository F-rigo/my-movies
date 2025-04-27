import styled from 'styled-components'

const MainLayout = styled.main`
  margin: 4rem 2rem;
  min-height: calc(100vh - 8rem);
  background: ${({ theme }) => theme.colors.primary[900]};
  padding-bottom: 4rem;
`

export default MainLayout
