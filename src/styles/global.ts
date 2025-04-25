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
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0f0f0f;
    color: #fff;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle;
