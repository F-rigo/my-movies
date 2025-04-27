// src/styles/theme.ts
export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: "'Open Sans', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
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
    mainbg: '#0f0f0f',
    primary: '#FF0000',
    secondary: '#E50914',
    mainBg: '#141414',
    cardBg: '#1F1F1F',
    lightBg: '#2D2D2D',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#7B7B7B',
    gray: '#4D4D4D',
    darkGray: '#292929',
    textColor: '#E5E5E5',
    error: '#FF0000'
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  media: {
    lteMedium: '(max-width: 768px)'
  }
} as const
