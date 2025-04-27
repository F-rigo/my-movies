import styled from 'styled-components'

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.mainBg};
  padding: ${({ theme }) => theme.spacings.medium};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.layers.menu};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
`

export const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    font-weight: ${({ theme }) => theme.font.bold};
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    text-decoration: none;
    transition: color 0.3s ease;
    padding: ${({ theme }) => theme.spacings.xsmall} ${({ theme }) => theme.spacings.small};
    border-radius: ${({ theme }) => theme.border.radius};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.darkGray};
    }
  }
`
