// src/styles/theme.ts
export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.8rem' // Slightly more rounded corners
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    primary: '#00E0FF', // Bright cyan as accent color
    secondary: '#E50914', // Netflix-like red
    mainBg: '#141414', // Dark background
    cardBg: '#1F1F1F', // Slightly lighter for cards
    lightBg: '#2D2D2D',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#7B7B7B',
    gray: '#4D4D4D',
    darkGray: '#292929',
    textColor: '#E5E5E5' // Light text color
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
