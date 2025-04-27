import { createGlobalStyle } from 'styled-components'

/**
 * Global styles for the application
 * Includes basic reset, typography, and theme settings
 *
 * TODO:
 * - Add dark/light theme support
 * - Implement CSS variables for theming
 * - Add responsive typography
 */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.primary[900]};
    color: ${({ theme }) => theme.colors.white[100]};
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }
`

export default GlobalStyle;
