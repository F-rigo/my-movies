import styled from 'styled-components'

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.layers.menu};
`

export const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    font-weight: ${({ theme }) => theme.font.bold};
    text-decoration: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
