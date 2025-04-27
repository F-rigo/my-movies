import styled from 'styled-components'

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.primary[800]};
  padding: ${({ theme }) => theme.spacings.medium};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.layers.alwaysOnTop};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[700]};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transform: translateY(0);
  height: 7.2rem;

  &.scrolled {
    transform: translateY(-10px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }
`

export const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.font.bold};
    text-decoration: none;
    transition: opacity 0.3s ease;
    line-height: 1;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacings.xsmall};
  color: ${({ theme }) => theme.colors.white[100]};
  z-index: ${({ theme }) => theme.layers.alwaysOnTop + 1};

  @media ${({ theme }) => theme.media.lteLarge} {
    display: block;
  }
`

export const MenuIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: currentColor;
    transition: transform 0.3s ease;
  }

  &::before {
    top: 0.6rem;
  }

  &::after {
    bottom: 0.6rem;
  }

  ${MenuButton}[aria-expanded="true"] & {
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};
  font-size: 1.6rem;
  line-height: 1.5;

  @media ${({ theme }) => theme.media.lteLarge} {
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 30rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.primary[500]};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacings.xxlarge} ${({ theme }) => theme.spacings.medium};
    transition: right 0.3s ease;
    border-left: 1px solid ${({ theme }) => theme.colors.grey[700]};
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    z-index: ${({ theme }) => theme.layers.alwaysOnTop};
  }

  a {
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 1.6rem;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: ${({ theme }) => theme.spacings.xsmall} ${({ theme }) => theme.spacings.small};
    border-radius: ${({ theme }) => theme.border.radius};
    position: relative;
    line-height: 1.5;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[900]};
      background: ${({ theme }) => theme.colors.white[100]};
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary[900]};
      background: ${({ theme }) => theme.colors.white[100]};
    }
  }
`
